function openTab(evt, year) {
    let tabContents = document.querySelectorAll('.tabcontent');
    tabContents.forEach((tab) => {
      tab.style.display = "none";
    });
  
    let tabLinks = document.querySelectorAll('.tablink');
    tabLinks.forEach((link) => {
      link.classList.remove("active");
    });
  
    document.getElementById(year).style.display = "block";
    evt.currentTarget.classList.add("active");
  }
  
  function updateGraph(month) {
    // Appel à une fonction qui met à jour les données et le graphique
    loadDataAndRenderGraph(month);
  }
  
  function loadDataAndRenderGraph(month) {
    // Exemples de données pour les collègues
    const data = {
      "2024": {
        "January": [
          { name: "Jean", conformity: 5, nonConformity: 2 },
          { name: "Marie", conformity: 7, nonConformity: 1 }
        ],
        "February": [
          { name: "Jean", conformity: 6, nonConformity: 1 },
          { name: "Marie", conformity: 8, nonConformity: 0 }
        ]
      }
    };
  
    // Récupérer les données pour le mois sélectionné
    const selectedData = data["2024"][month]; // Adapter pour d'autres années si nécessaire
  
    // Mettre à jour le graphique avec ces données
    renderChart(selectedData);
  }
  
  function renderChart(data) {
    const ctx = document.getElementById('myChart').getContext('2d');
    const chartData = {
      labels: data.map(d => d.name),
      datasets: [{
        label: 'Conformités',
        data: data.map(d => d.conformity),
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
      }, {
        label: 'Non-conformités',
        data: data.map(d => d.nonConformity),
        backgroundColor: 'rgba(220, 53, 69, 0.5)',
      }]
    };
  
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
  }