const btnAdd = document.getElementById("");
import getProducts from "./getProducts.js";
const addProduct = (url, id) => {
  const productsList = [];
  let idProduct = btnAdd.getAttribute("value");
  const product = getProducts(url + idProduct);
  const { id, name, img, price, description } = product;
  let productAdd = {
      id,
      name,
      img,
      price,
      description,
      quantity: 1
  }

  let cart = localStorage.getItem("cart");
  if (cart == "") {
    localStorage.setItem(JSON.parse(productAdd));
  } else {
  }
};
