console.log("Script Notre démarche chargé");
// 1. Récupérer les trois boutons En savoir plus
const boutons = document.querySelectorAll(".carte-bouton");

// 2. Pour chaque bouton, écouter le clic
for (const bouton of boutons) {
  bouton.addEventListener("click", function () {
    const carte = bouton.parentElement;
    // 4. Ouvrir ou fermer la carte : votre ligne ici
    carte.classList.toggle("est-ouvert");
  });
}
