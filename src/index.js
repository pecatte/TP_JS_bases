/*
 fonction : categorieAge
 données : age entier
 résultat : catégorie chaine de car
 */
export function categorieAge(age) {
  let categorie = "";
  if (age > 12) {
    categorie = "Cadet";
  } else {
    if (age > 10) {
      categorie = "Minime";
    } else {
      if (age > 8) {
        categorie = "Pupille";
      } else {
        if (age > 6) {
          categorie = "Poussin";
        }
      }
    }
  }
  return categorie;
}
console.log("14 ans " + categorieAge(14));
console.log(" 7 ans " + categorieAge(7));

/*
 fonction : initTableauHasard
 données : nb netier
 résultat : le tableau
 */
const BORNE_MAX = 100;
function initTableauHasard(nb) {
  let t = [];
  for (let i = 0; i < nb; i++) {
    t[i] = Math.round(Math.random() * BORNE_MAX);
  }
  return t;
}
let tab = initTableauHasard(4);
console.log(tab);

/*
fonction : identique
données : un tableau et 2 indices
resultat : vrai si les 2 cases sont identiques
*/
function identique(t, i, j) {
  return t[i] === t[j];
}
/*
fonction : presente
données : un tableau
resultat : vrai si la dernière case est dans le début du tableau
*/
function presente(t) {
  let iDernier = t.length - 1;
  for (let i = 0; i < iDernier; i++) {
    if (identique(t, i, iDernier)) return true;
  }
  return false;
}

const tableau = [12, 23, 12];
console.log(presente(tableau));
