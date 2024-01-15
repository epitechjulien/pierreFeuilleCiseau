function pierreFeuilleCiseau(choixJoueur1, choixJoueur2) {
  let resultat = "";
  if (choixJoueur1 === choixJoueur2) {
    resultat = "Égalité";
  } else if (choixJoueur1 == "" || choixJoueur2 == "") {
    resultat = "Choix vide";
  } else if (
    (choixJoueur1 !== "pierre" &&
      choixJoueur1 !== "feuille" &&
      choixJoueur1 !== "ciseau") ||
    (choixJoueur2 !== "pierre" &&
      choixJoueur2 !== "feuille" &&
      choixJoueur2 !== "ciseau")
  ) {
    resultat = "Erreur de choix";
  } else if (
    (choixJoueur1 === "pierre" && choixJoueur2 === "ciseau") ||
    (choixJoueur1 === "feuille" && choixJoueur2 === "pierre") ||
    (choixJoueur1 === "ciseau" && choixJoueur2 === "feuille")
  ) {
    resultat = "Joueur 1";
  } else {
    resultat = "Joueur 2";
  }
  return "Le résultat est : " + resultat;
}

const choixJoueur1 = "feuille";
const choixJoueur2 = "ciseau";
const resultat = pierreFeuilleCiseau(choixJoueur1, choixJoueur2);
console.log(resultat);
