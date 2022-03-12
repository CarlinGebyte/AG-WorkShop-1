import getProducts from "./getProducts.js";
import showProducts from "./showProducts.js";
import modalDetail from "./detail.js";

const user = document.getElementById("user-icon");
const form = document.getElementById("login-form");
const modal = document.getElementById("modal-login");
const url = "https://fresh-prince-ag.herokuapp.com/Products/";
const cards = document.getElementById("slide");

user.addEventListener("click", () => {
  console.log("hola");
  modal.style.display = "flex";
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const main = document.getElementsByClassName("prince-content");
  const footer = document.getElementsByClassName("prince-footer");
  footer[0].classList.remove("footer-fixed");
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  if (email != "" && pass != "") {
    modal.style.display = "none";
    main[0].style.display = "block";
    cards.innerHTML = "";
    const products = await getProducts(url);
    await showProducts(products, cards);
  } else {
    alert("Please, write your mail and password.");
  }
});

cards.addEventListener("click", async (e) => {
  let id = e.target.getAttribute("value");
  await modalDetail(url, id);
});
