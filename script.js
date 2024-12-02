import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD1Y82eZiGwHe074VYWmvWk_Fak_2taDQ4",
  authDomain: "lotoreview.firebaseapp.com",
  projectId: "lotoreview",
  storageBucket: "lotoreview.appspot.com",
  messagingSenderId: "882641137378",
  appId: "1:882641137378:web:22ef5d606d84c829fff8bb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let currentChart = null;

// Fonction pour créer un effet 3D
function create3DGradient(ctx, color) {
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, color);
  gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.15)');
  gradient.addColorStop(1, color);
  return gradient;
}

// Mise à jour du graphique pour une année et un mois donnés
function updateGraph(month, year) {
  console.log(`Mise à jour du graphique pour ${month} ${year}`);
  const dataRef = collection(db, "data");

  onSnapshot(dataRef, (snapshot) => {
    const filteredData = snapshot.docs
      .map(doc => doc.data())
      .filter(entry => entry.annee === year && entry.mois === month);

    if (filteredData.length === 0) {
      console.warn(`Aucune donnée trouvée pour ${month} ${year}`);
    }

    const labels = filteredData.map(d => d.collaborateur);
    const conformityData = filteredData.map(d => d.conformites);
    const nonConformityData = filteredData.map(d => d.nonConformites);

    // Sélectionner le canvas correspondant à l'année
    const canvasId = `myChart${year}`;
    const ctx = document.getElementById(canvasId)?.getContext('2d');

    // Vérifier que le canvas existe
    if (!ctx) {
      console.error(`Canvas avec l'ID ${canvasId} introuvable.`);
      return; // Sortir si le canvas n'existe pas
    }

    renderChart(ctx, labels, conformityData, nonConformityData, year);
  });
}

// Fonction de rendu du graphique
function renderChart(ctx, labels, conformities, nonConformities, year) {
  // Détruire le graphique précédent uniquement si nécessaire
  if (currentChart) {
    currentChart.destroy();
  }

  currentChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Conformités',
          data: conformities,
          backgroundColor: labels.map(() => create3DGradient(ctx, 'rgba(0, 150, 255, 0.9)')),
          borderColor: '#B0C4DE',
          borderWidth: 1.5,
        },
        {
          label: 'Non-Conformités',
          data: nonConformities,
          backgroundColor: labels.map(() => create3DGradient(ctx, 'rgba(255, 69, 100, 0.9)')),
          borderColor: '#F08080',
          borderWidth: 1.5,
        },
      ],
    },
    options: {
      responsive: true, // Rend le graphique responsive
      maintainAspectRatio: false, // Permet d'ajuster la hauteur indépendamment de la largeur
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1, color: '#B0B0B0' },
        },
        x: {
          ticks: { maxRotation: 45, minRotation: 45, color: '#B0B0B0' },
        },
      },
      plugins: {
        legend: { labels: { color: '#B0B0B0' } },
      },
    },
  });
}

// Fonction pour calculer et afficher le total par année
function showTotal(year) {
  console.log(`Affichage du total pour ${year}`);
  const dataRef = collection(db, "data");

  onSnapshot(dataRef, (snapshot) => {
    const filteredData = snapshot.docs
      .map(doc => doc.data())
      .filter(entry => entry.annee === year); // Filtrer par l'année sélectionnée

    const labels = [...new Set(filteredData.map(d => d.collaborateur))]; // Récupérer les collaborateurs uniques
    const conformityData = labels.map(label => 
      filteredData.filter(d => d.collaborateur === label)
        .reduce((total, d) => total + d.conformites, 0)
    );
    const nonConformityData = labels.map(label => 
      filteredData.filter(d => d.collaborateur === label)
        .reduce((total, d) => total + d.nonConformites, 0)
    );

    // Sélectionner le canvas correspondant à l'année
    const canvasId = `totalChart${year}`;
    const ctx = document.getElementById(canvasId)?.getContext('2d');

    // Vérifier que le canvas existe
    if (!ctx) {
      console.error(`Canvas avec l'ID ${canvasId} introuvable.`);
      return; // Sortir si le canvas n'existe pas
    }

    renderChart(ctx, labels, conformityData, nonConformityData, year);
  });
}

// Gérer les clics sur les onglets des années
function openTab(event, year) {
  console.log(`Changement d'année pour ${year}`);
  
  // Gérer les onglets actifs
  document.querySelectorAll('.tablink').forEach(tab => tab.classList.remove('active'));
  event.currentTarget.classList.add('active');

  // Masquer tous les autres graphiques et afficher celui de l'année active
  document.querySelectorAll('.tabcontent').forEach(content => {
    content.classList.remove('active');
  });

  const yearContent = document.getElementById(`year-${year}`);
  yearContent.classList.add('active');
  
  // Réinitialiser les mois actifs
  const activeMonth = document.querySelector('.month-btn.active')?.textContent || 'January';
  updateGraph(activeMonth, year);
}

// Gestion des onglets mois
document.querySelectorAll('.month-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const month = button.textContent;
    const year = document.querySelector('.tablink.active')?.textContent;

    document.querySelectorAll('.month-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    updateGraph(month, year);
  });
});

// Rendre les fonctions accessibles dans HTML
window.openTab = openTab;
window.updateGraph = updateGraph;
window.showTotal = showTotal;