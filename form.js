// Importation des fonctions Firebase (modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

// Configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD1Y82eZiGwHe074VYWmvWk_Fak_2taDQ4",
    authDomain: "lotoreview.firebaseapp.com",
    projectId: "lotoreview",
    storageBucket: "lotoreview.appspot.com",
    messagingSenderId: "882641137378",
    appId: "1:882641137378:web:22ef5d606d84c829fff8bb"
};

// Initialisation Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const dataRef = collection(db, "data");
console.log("Firebase initialisé avec succès !");

// Gestionnaire de formulaire
document.addEventListener("DOMContentLoaded", () => {
    // Sélectionner le formulaire par son ID
    const form = document.getElementById("form");
  
    if (form) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
  
        // Récupération des valeurs
        const collaborateur = document.getElementById("collaborateur").value;
        const annee = document.getElementById("annee").value;
        const mois = document.getElementById("mois").value;
        const conformites = parseInt(document.getElementById("conformites").value, 10);
        const nonConformites = parseInt(document.getElementById("nonConformites").value, 10);
  
        console.log("Données soumises :", {
          collaborateur,
          annee,
          mois,
          conformites,
          nonConformites,
        });
  
        // Ajouter les données dans Firebase
        try {
          const docRef = await addDoc(dataRef, {
            collaborateur,
            annee,
            mois,
            conformites,
            nonConformites,
          });
          console.log("Document ajouté avec ID :", docRef.id);
          alert("Données enregistrées avec succès !");
          form.reset();
        } catch (error) {
          console.error("Erreur lors de l'enregistrement :", error);
          alert("Une erreur est survenue.");
        }
      });
    } else {
      console.error("Formulaire introuvable !");
    }
  });