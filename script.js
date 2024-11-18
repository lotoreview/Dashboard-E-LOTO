// Déclaration des graphiques
let myChart2024 = null;
let myChart2025 = null;

const data = {
  "2024": {
    "January": [
      { name: "MODUN", conformity: 4, nonConformity: 3 },
      { name: "GEHAL", conformity: 3, nonConformity: 2 },
      { name: "YOBEN", conformity: 1, nonConformity: 0 },
      { name: "LYVIR", conformity: 8, nonConformity: 0 },
      { name: "GIFON", conformity: 6, nonConformity: 0 },
      { name: "AUCAR", conformity: 4, nonConformity: 0 },
      { name: "TYGIO", conformity: 0, nonConformity: 1 },
      { name: "SIOBR", conformity: 1, nonConformity: 0 },
      { name: "DEROC", conformity: 2, nonConformity: 0 },
    ],
    "February": [
      { name: "GEHAL", conformity: 4, nonConformity: 0 },
      { name: "ROAAD", conformity: 3, nonConformity: 1 },
      { name: "TYGIO", conformity: 3, nonConformity: 1 },
      { name: "AUCAR", conformity: 8, nonConformity: 0 },
      { name: "LYVIR", conformity: 8, nonConformity: 0 },
      { name: "GIFON", conformity: 4, nonConformity: 0 },
      { name: "MAAGE", conformity: 1, nonConformity: 0 },
    ],
    "March": [
      { name: "ROAAD", conformity: 1, nonConformity: 0 },
      { name: "TYGIO", conformity: 3, nonConformity: 1 },
      { name: "LYVIR", conformity: 6, nonConformity: 0 },
      { name: "GEHAL", conformity: 11, nonConformity: 0 },
      { name: "SIOBR", conformity: 3, nonConformity: 3 },
      { name: "YOBEN", conformity: 1, nonConformity: 0 },
      { name: "AUCAR", conformity: 7, nonConformity: 0 },
      { name: "MAAGE", conformity: 5, nonConformity: 1 },
      { name: "DEROC", conformity: 1, nonConformity: 0 },
      { name: "GIFON", conformity: 2, nonConformity: 0 },
    ],
    "April": [
      { name: "GEHAL", conformity: 8, nonConformity: 1 },
      { name: "AUCAR", conformity: 11, nonConformity: 1 },
      { name: "SIOBR", conformity: 1, nonConformity: 2 },
      { name: "LYVIR", conformity: 12, nonConformity: 0 },
      { name: "GIFON", conformity: 9, nonConformity: 0 },
      { name: "MAAGE", conformity: 4, nonConformity: 1 },
      { name: "DEROC", conformity: 2, nonConformity: 0 },
      { name: "TYGIO", conformity: 1, nonConformity: 1 },
      { name: "YOBEN", conformity: 1, nonConformity: 0 },
    ],
    "May": [
      { name: "GEHAL", conformity: 10, nonConformity: 0 },
      { name: "AUCAR", conformity: 3, nonConformity: 1 },
      { name: "LYVIR", conformity: 9, nonConformity: 0 },
      { name: "MAAGE", conformity: 6, nonConformity: 2 },
      { name: "GIFON", conformity: 7, nonConformity: 0 },
      { name: "TYGIO", conformity: 3, nonConformity: 1 },
      { name: "MODUN", conformity: 5, nonConformity: 1 },
      { name: "FEPAD", conformity: 2, nonConformity: 0 },
    ],
    "June": [
      { name: "FEPAD", conformity: 4, nonConformity: 0 },
      { name: "MAAGE", conformity: 8, nonConformity: 2 },
      { name: "MODUN", conformity: 0, nonConformity: 1 },
      { name: "GIFON", conformity: 10, nonConformity: 0 },
      { name: "YOBEN", conformity: 2, nonConformity: 0 },
      { name: "LYVIR", conformity: 5, nonConformity: 0 },
      { name: "AUCAR", conformity: 6, nonConformity: 1 },
      { name: "GEHAL", conformity: 9, nonConformity: 0 },
      { name: "FAVEI", conformity: 3, nonConformity: 0 },
    ],
    "July": [
      { name: "GIFON", conformity: 9, nonConformity: 0 },
      { name: "LYVIR", conformity: 2, nonConformity: 0 },
      { name: "FAVEI", conformity: 9, nonConformity: 1 },
      { name: "AUCAR", conformity: 21, nonConformity: 0 },
      { name: "FEPAD", conformity: 10, nonConformity: 0 },
      { name: "MODUN", conformity: 0, nonConformity: 6 },
      { name: "TYGIO", conformity: 1, nonConformity: 0 },
      { name: "YOBEN", conformity: 0, nonConformity: 2 },
    ],
    "August": [
      { name: "FEPAD", conformity: 8, nonConformity: 0 },
      { name: "FAVEI", conformity: 5, nonConformity: 0 },
      { name: "LYVIR", conformity: 1, nonConformity: 0 },
      { name: "AUCAR", conformity: 13, nonConformity: 2 },
      { name: "GIFON", conformity: 3, nonConformity: 0 },
    ],
    "September": [
      { name: "FEPAD", conformity: 5, nonConformity: 1 },
      { name: "GIFON", conformity: 4, nonConformity: 0 },
      { name: "FAVEI", conformity: 1, nonConformity: 1 },
      { name: "MODUN", conformity: 0, nonConformity: 1 },
      { name: "AUCAR", conformity: 4, nonConformity: 0 },
    ],
    "October": [
      { name: "AUCAR", conformity: 12, nonConformity: 4 },
      { name: "FEPAD", conformity: 6, nonConformity: 2 },
      { name: "FAVEI", conformity: 4, nonConformity: 0 },
      { name: "GIFON", conformity: 5, nonConformity: 0 },
      { name: "MTIBO", conformity: 4, nonConformity: 0 },
    ],
    "November": [
      { name: "Jean", conformity: 6, nonConformity: 1 },
      { name: "Marie", conformity: 8, nonConformity: 0 },
    ],
    "December": [
      { name: "Jean", conformity: 6, nonConformity: 1 },
      { name: "Marie", conformity: 8, nonConformity: 0 },
    ]
  },
  "2025": {
    "January": [
      { name: "Paul", conformity: 4, nonConformity: 3 },
      { name: "Sophie", conformity: 6, nonConformity: 2 },
    ],
    "February": [
      { name: "Paul", conformity: 5, nonConformity: 1 },
      { name: "Sophie", conformity: 7, nonConformity: 0 },
    ]
  }
  
};

function openTab(evt, year) {
  // Masquer tous les contenus
  let tabContents = document.querySelectorAll(".tabcontent");
  tabContents.forEach((tab) => {
    tab.style.display = "none";  // On cache tous les autres contenus
    tab.classList.remove("active");  // On retire l'état "actif"
  });

  // Retirer la classe active de tous les boutons
  let tabLinks = document.querySelectorAll(".tablink");
  tabLinks.forEach((link) => link.classList.remove("active"));

  // Ajouter la classe active au bouton de l'année sélectionnée
  evt.currentTarget.classList.add("active");

  // Afficher le contenu de l'année sélectionnée
  const selectedTab = document.getElementById(`year-${year}`);
  selectedTab.style.display = "block";  // On affiche le contenu de l'onglet
  setTimeout(() => selectedTab.classList.add("active"), 10);  // Ajout de la classe active après l'affichage

  // Mettre à jour le graphique avec les données du mois sélectionné
  const month = document.querySelector(`#year-${year} .month-btn.active`)?.textContent || 'January';
  updateGraph(month, year);
}

// Fonction pour mettre à jour le graphique en fonction du mois, de l'année et du collègue sélectionné
function updateGraph(month, year, colleague = "all") {
  // Charger les données filtrées
  let dataForGraph = data[year][month];
  if (colleague && colleague !== "all") {
    dataForGraph = dataForGraph.filter((entry) => entry.name === colleague);
  }

  // Rendre le graphique avec les données filtrées
  renderChart(dataForGraph, year);

  // Retirer la classe active de tous les boutons mois
  let monthLinks = document.querySelectorAll(`#year-${year} .month-btn`);
  monthLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Ajouter la classe active au bouton mois sélectionné
  let selectedMonthButton = Array.from(monthLinks).find(link => link.textContent === month);
  if (selectedMonthButton) {
    selectedMonthButton.classList.add("active");
  }
}

// Fonction pour afficher le graphique avec les données filtrées
function renderChart(data, year) {
  let ctx;

  // Affichage ou mise à jour du graphique pour 2024
  if (year === "2024") {
    ctx = document.getElementById('myChart2024').getContext('2d');
    // Si le graphique 2024 existe déjà, on le détruit et le recrée
    if (myChart2024) {
      myChart2024.destroy();
    }
    // Assurer que le graphique 2024 est affiché et 2025 masqué
    document.getElementById('myChart2024').classList.add("visible");
    document.getElementById('myChart2025').classList.remove("visible"); // Masquer l'autre graphique

    // Créer le graphique
    myChart2024 = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(d => d.name),
        datasets: [{
          label: '',
          data: data.map(d => d.conformity),
          backgroundColor: data.map(() => create3DGradient(ctx, 'rgba(0, 150, 255, 0.9)')),
          borderColor: '#B0C4DE',
          borderWidth: 1.5
        }, {
          label: '',
          data: data.map(d => d.nonConformity),
          backgroundColor: data.map(() => create3DGradient(ctx, 'rgba(255, 69, 100, 0.9)')),
          borderColor: '#F08080',
          borderWidth: 1.5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: { 
              color: '#B0B0B0', 
              stepSize: 1 // Définit l'incrément de l'échelle à 1
            },
          },
          x: {
            ticks: { maxRotation: 45, minRotation: 45, color: '#B0B0B0' },
          }
        },
        plugins: {
          legend: { labels: { color: '#B0B0B0' } }
        }
      }
    });
  }

  // Reproduire pour `year === "2025"`
  if (year === "2025") {
    ctx = document.getElementById('myChart2025').getContext('2d');
    // Si le graphique 2023 existe déjà, on le détruit et le recrée
    if (myChart2025) {
      myChart2025.destroy();
    }
    // Assurer que le graphique 2025 est affiché et 2024 masqué
    document.getElementById('myChart2025').classList.add("visible");
    document.getElementById('myChart2024').classList.remove("visible"); // Masquer l'autre graphique

    // Créer le graphique
    myChart2025 = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(d => d.name),
        datasets: [{
          label: '',
          data: data.map(d => d.conformity),
          backgroundColor: data.map(() => create3DGradient(ctx, 'rgba(0, 150, 255, 0.9)')),
          borderColor: '#B0C4DE',
          borderWidth: 1.5
        }, {
          label: '',
          data: data.map(d => d.nonConformity),
          backgroundColor: data.map(() => create3DGradient(ctx, 'rgba(255, 69, 100, 0.9)')),
          borderColor: '#F08080',
          borderWidth: 1.5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: { 
              color: '#B0B0B0', 
              stepSize: 1 // Définit l'incrément de l'échelle à 1
            },
          },
          x: {
            ticks: { maxRotation: 45, minRotation: 45, color: '#B0B0B0' },
          }
        },
        plugins: {
          legend: { labels: { color: '#B0B0B0' } }
        }
      }
    });
  }
}

// Fonction pour créer un effet 3D en utilisant un dégradé linéaire
function create3DGradient(ctx, color) {
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, color);
  gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.15)');
  gradient.addColorStop(1, color);
  return gradient;
}

// Fonction pour filtrer par collègue
function filterByColleague(event) {
  const selectedColleague = event.target.value;
  const year = document.querySelector(".tablink.active").textContent;
  const month = document.querySelector(`#year-${year} .month-btn.active`).textContent;

  // Mettre à jour le graphique en fonction du collègue sélectionné
  updateGraph(month, year, selectedColleague);
}

function showTotal(evt, year) {
  // Masquer tous les contenus
  let tabContents = document.querySelectorAll(".tabcontent");
  tabContents.forEach((tab) => {
    tab.style.display = "none";  // Masquer tous les onglets
    tab.classList.remove("active");  // Retirer l'état "actif"
  });

  // Retirer la classe active de tous les boutons
  let tabLinks = document.querySelectorAll(".tablink");
  tabLinks.forEach((link) => link.classList.remove("active"));

  // Ajouter la classe active au bouton "Total"
  evt.currentTarget.classList.add("active");

  // Afficher le contenu de l'année sélectionnée
  const selectedTab = document.getElementById(`year-${year}`);
  selectedTab.style.display = "block";  // Affichage de l'onglet "Total"
  setTimeout(() => selectedTab.classList.add("active"), 10);  // Ajouter la classe active

  // Calculer les totaux pour chaque collègue
  let totalData = [];
  for (const month in data[year]) {
    data[year][month].forEach((entry) => {
      let existingEntry = totalData.find(e => e.name === entry.name);
      if (existingEntry) {
        existingEntry.conformity += entry.conformity;
        existingEntry.nonConformity += entry.nonConformity;
      } else {
        totalData.push({ ...entry });
      }
    });
  }

  // Afficher le graphique total
  renderTotalChart(totalData, year);
}

function renderTotalChart(data, year) {
  const canvasId = `myChart${year}`;
  const ctx = document.getElementById(canvasId).getContext("2d");

  // Détruire le graphique existant s'il y en a un
  if (year === "2024" && myChart2024) {
    myChart2024.destroy();
  } else if (year === "2025" && myChart2025) {
    myChart2025.destroy();
  }

  // Créer le graphique avec les données totales
  const totalChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.name),
      datasets: [
        {
          label: '',
          data: data.map(d => d.conformity),
          backgroundColor: data.map(() => create3DGradient(ctx, 'rgba(0, 150, 255, 0.9)')),
          borderColor: '#B0C4DE',
          borderWidth: 1.5
        },
        {
          label: '',
          data: data.map(d => d.nonConformity),
          backgroundColor: data.map(() => create3DGradient(ctx, 'rgba(255, 69, 100, 0.9)')),
          borderColor: '#F08080',
          borderWidth: 1.5
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1, color: '#B0B0B0' },
          title: { display: true, text: '', color: '#B0B0B0' }
        },
        x: {
          ticks: { maxRotation: 45, minRotation: 45, color: '#B0B0B0' },
          title: { display: true, text: '', color: '#B0B0B0' }
        }
      },
      plugins: {
        legend: { labels: { color: '#B0B0B0' } }
      }
    }
  });

  // Assigner le graphique au bon endroit
  if (year === "2024") {
    myChart2024 = totalChart;
  } else if (year === "2025") {
    myChart2025 = totalChart;
  }
}

// Écouteur d'événements pour redimensionner le graphique lorsque la fenêtre change de taille
window.addEventListener('resize', resizeChart);
function resizeChart() {
  if (myChart2024) myChart2024.resize();
  if (myChart2025) myChart2025.resize();
}