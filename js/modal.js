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

// Valider noms
/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * ici : deux caractères au minimum
 * @param {string} nom 
 * @return {boolean}
 */

function validerNoms(nom) {
  if (nom.length > 2) {
    return true
  } else {
    return false
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
    return false
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
  }
  return false
}



// form 
form.addEventListener("submit", (event) => {
  // empêche la page de se recharger par défauts
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

  // vérifie les noms : aucune actions directes pour l'instant
  if (validerNoms(firstName) && validerNoms(lastName)) {
    console.log("noms valides")
  } else {
    console.log("prénoms invalides")
  }
  
  // vérifie que la quantité de concours est bien un caractère numérique
  if (validerQuantite(quantity)) {
    console.log("quantité valide")
  } else {
    console.log("quantité non valide")
  }

  // vérifie que l'email est au bon format
  if (validerEmail(email)) {
    console.log("email valide")
  } else {
    console.log("email non valide")
  }
  
})


