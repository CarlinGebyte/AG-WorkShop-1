import getProducts from "./getProducts.js";
import showProducts from "./showProducts.js";

const user = document.getElementById("user-icon");
const form = document.getElementById("login-form");
const modal = document.getElementById("modal-login");
const url = "https://fresh-prince-ag.herokuapp.com";
const cards = document.getElementById("cards-container");

// user.addEventListener("click", () => {
//   modal.style.display = block;
// });

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  if (email != "" && pass != "") {
    modal.style.display = "none";
    const products = await getProducts(url);
    await showProducts(products, cards);
  } else {
    alert("Please, write your mail and password.");
  }
});
