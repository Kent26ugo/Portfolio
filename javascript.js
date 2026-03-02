// Sélectionner tous les titres h2
document.querySelectorAll("h2").forEach(titre => {
    titre.style.cursor = "pointer"; // curseur main au survol

    titre.addEventListener("click", () => {
        // Trouver le contenu juste après le titre
        let contenu = titre.nextElementSibling;

        // Alterner entre caché et visible
        if (contenu.style.display === "none" || contenu.style.display === "") {
            contenu.style.display = "block";
        } else {
            contenu.style.display = "none";
        }
    });
});

// Récupérer le formulaire par son ID
            let formulaire = document.getElementById("monFormulaire"); 
    formulaire.addEventListener("submit", function(event) { 
        let nom = document.getElementById("nom").value; 
        let email = document.getElementById("email").value; 
        let message = document.getElementById("message").value; 
    
// Vérifier si un champ est vide
        if (nom === "" || email === "" || message === "") { 
            alert("Veuillez remplir tous les champs du formulaire."); 
            event.preventDefault(); // Empêcher l'envoi du formulaire 
        }
// Vérification supplémentaire : email doit contenir un "@"
        if (!email.includes("@")) {
            alert("Veuillez entrer une adresse email valide.");
            event.preventDefault();
        }
// Si le formulaire n’est pas valide, empêcher l’envoi
    if (!formulaireValide) {
        alert("Veuillez corriger les champs en rouge.");
        event.preventDefault();
    }

});
  