// Appel de la fonction test
testUnitaire();

// Fonction pierre, feuille, ciseau
function pierreFeuilleCiseau(choixJoueur1, choixJoueur2) {
  let resultat = 0;
  // Condition de victoire du Joueur 1
  if (
    (choixJoueur1 === "pierre" && choixJoueur2 === "ciseau") ||
    (choixJoueur1 === "feuille" && choixJoueur2 === "pierre") ||
    (choixJoueur1 === "ciseau" && choixJoueur2 === "feuille")
  ) {
    resultat = 1;
    // Condition de victoire du Joueur 2
  } else if (
    (choixJoueur2 === "pierre" && choixJoueur1 === "ciseau") ||
    (choixJoueur2 === "feuille" && choixJoueur1 === "pierre") ||
    (choixJoueur2 === "ciseau" && choixJoueur1 === "feuille")
  ) {
    resultat = -1;
  }
  return resultat;
}

// Fonction de test
function testUnitaire() {
  const data = ["pierre", "feuille", "ciseau", "", "toto", null, undefined];

  try {
    for (let choixJoueur1 of data) {
      for (let choixJoueur2 of data) {
        const resultat = pierreFeuilleCiseau(choixJoueur1, choixJoueur2);

        // Les cas d'échec
        if (resultat === 0) {
          // Échec car égalité
          if (choixJoueur1 === choixJoueur2) {
            // console.log(
            //   ` Test échoué car égalité\n Choix 1 : ${choixJoueur1}\n Choix 2 : ${choixJoueur2}\n`
            // );
            // Échec car une des choix est vide
          } else if (choixJoueur1 === "" || choixJoueur2 === "") {
            // console.log(
            //   ` Test échoué car un des choix est vide\n Choix 1 : ${choixJoueur1}\n Choix 2 : ${choixJoueur2}\n`
            // );
            //  Échec car un des choix est null
          } else if (choixJoueur1 === null || choixJoueur2 === null) {
            // console.log(
            //   ` Test échoué car un des choix est null\n Choix 1 : ${choixJoueur1}\n Choix 2 : ${choixJoueur2}\n`
            // );
            // Échec car un des choix est undefined
          } else if (choixJoueur1 === undefined || choixJoueur2 === undefined) {
            // console.log(
            //   ` Test échoué car un des choix est undefined\n Choix 1 : ${choixJoueur1}\n Choix 2 : ${choixJoueur2}\n`
            // );
          }
          //  Échec car un des choix est un choix différent (de pierre, feuille, ciseau)
          else if (
            (choixJoueur1 !== "pierre" &&
              choixJoueur1 !== "feuille" &&
              choixJoueur1 !== "ciseau" &&
              choixJoueur1 !== "") ||
            (choixJoueur2 !== "pierre" &&
              choixJoueur2 !== "feuille" &&
              choixJoueur2 !== "ciseau" &&
              choixJoueur2 !== "")
          ) {
            // console.log(
            //   `Test échoué car un des choix est une erreur\n Choix 1 : ${choixJoueur1}\n Choix 2 : ${choixJoueur2}\n`
            // );
          }
          // Cas de réussite
        } else {
          // const gagnant = resultat === 1 ? "Joueur 1" : "Joueur 2";
          // console.log(
          //   ` Test réussi, le gagnant est le ${gagnant}\n Choix du joueur 1 : ${choixJoueur1}\n Choix du joueur 2 : ${choixJoueur2}\n`
          // );
        }
      }
    }
    console.log("Tout les test sont réussi");
  } catch (error) {
    console.error("Une erreur s'est produite lors du test:", error);
  }
}
