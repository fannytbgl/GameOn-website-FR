function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalCloseBtn = document.querySelector(".close");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector('form');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event (Issue #1)
modalCloseBtn.addEventListener("click", (event) => {
  modalbg.style.display = "none";
})

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Valider prénom
/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * ici : deux caractères au minimum
 * @param {string} prenom
 * @return {boolean}
 */
function validerPrenom(prenom) {
  if (prenom.length >= 2) {
    return true
  } else {
    throw new Error("Veuillez entrer 2 caractères ou plus pour le champ du prénom.")
  }
}

// Valider nom
/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * ici : deux caractères au minimum
 * @param {string} nom 
 * @return {boolean}
 */
function validerNom(nom) {
  if (nom.length >= 2) {
    return true
  } else {
    throw new Error("Veuillez entrer 2 caractères ou plus pour le champ du nom.")
  }
}

// Valider quantité
/**
 * Cette fonction prend une quantité en paramètre et valide qu'elle est au bon format
 * ici : un caractère numérique
 * @param {string} chiffre 
 * @return {boolean}
 */
function validerQuantite(chiffre) {
  if (/^\d+$/.test(chiffre)) {
    return true
  } else {
    throw new Error("Veuillez renseigner une valeur numérique.")
  }
}

// Valider email
/**
 * Cette fonction prend un email en paramètre et valide qu'il est au bon format. 
 * @param {string} email 
 * @return {boolean}
 */
function validerEmail(email) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  if (emailRegExp.test(email)) {
      return true
  } else {
    throw new Error("Veuillez entrer une adresse e-mail valide.")
  }
}

// Valider bouton radio
/**
 * Cette fonction prend un email en paramètre et valide qu'il est au bon format. 
 * @param {NodeList} radioButtons 
 * @return {boolean}
 */
function validerRadio(radioButtons) {
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      return true;
    }
  }
  throw new Error("Vous devez choisir une option.");
}

// Valider conditions générales
/**
 * Cette fonction prend en paramètre l'élément de case à cocher des conditions générales
 * et valide s'il est coché.
 * @param {HTMLInputElement} checkboxElement 
 * @return {boolean}
 */
function validerConditionsGenerales(checkboxElement) {
  if (checkboxElement.checked) {
    return true
  }
  throw new Error("Vous devez vérifier que vous acceptez les termes et conditions.")
}

// Gestion des messages d'erreur
let firstBody = document.querySelector('.formData label[for="first"]').closest('.formData')
let lastBody = document.querySelector('.formData label[for="last"]').closest('.formData')
let firstContenu = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
let lastContenu = "Veuillez entrer 2 caractères ou plus pour le champ du nom."

function afficherMessageErreur(body, contenu, errorId) {
  let newSpan = document.getElementById(errorId)

  if (!newSpan) {
    let newSpan = document.createElement("span")
    newSpan.id = errorId
    newSpan.textContent = contenu
    body.appendChild(newSpan)
  }
  
}

function supprimerMessageErreur(errorId) {
  let newSpan = document.getElementById(errorId);

  if (newSpan) {
    newSpan.remove();
  }
}

// form 
form.addEventListener("submit", (event) => {

  // empêche la page de se recharger par défauts (n'éfface pas les données du formulaire)
  event.preventDefault();

  // elements
  let baliseFirstName = document.getElementById("first")
  let firstName = baliseFirstName.value

  let baliseLastName = document.getElementById("last")
  let lastName = baliseLastName.value

  let baliseEmail = document.getElementById("email")
  let email = baliseEmail.value

  let baliseQuantity = document.getElementById("quantity")
  let quantity = baliseQuantity.value

  let radioButtons = document.getElementsByName("location")
  
  let conditionsGenerales = document.getElementById("checkbox1")

// gestion des erreurs
let erreurs = [];

try {
  validerPrenom(firstName);
  supprimerMessageErreur("firstErrorSpan")
} catch (error) {
  erreurs.push(error.message);
  afficherMessageErreur(firstBody, firstContenu, "firstErrorSpan");
}

try {
  validerNom(lastName);
  supprimerMessageErreur("lastErrorSpan")
} catch (error) {
  erreurs.push(error.message);
  afficherMessageErreur(lastBody, lastContenu, "lastErrorSpan");
}

try {
  validerEmail(email);
} catch (error) {
  erreurs.push(error.message);
}

try {
  validerQuantite(quantity);
} catch (error) {
  erreurs.push(error.message);
}

try {
  validerRadio(radioButtons);
} catch (error) {
  erreurs.push(error.message);
}

try {
  validerConditionsGenerales(conditionsGenerales);
} catch (error) {
  erreurs.push(error.message);
}

// Afficher toutes les erreurs
if (erreurs.length > 0) {
  console.log("Erreurs de validation :");
  erreurs.forEach((erreur) => {
    console.log(erreur);
  });
} else {
  // Aucune erreur, soumettre le formulaire
  console.log("Formulaire valide, soumission en cours...");
  form.submit();
}

  

  
})


