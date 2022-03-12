import getProducts from "./getProducts.js";
const addProduct = async (url, idProduct) => {
  const productsList = [];
  // let idProduct = btnAdd[0].getAttribute("value");
  const product = await getProducts(url + idProduct);
  const { id, name, img, price } = product;
  console.log(product)
  let productAdd = {
    id,
    name,
    img,
    price,
    quantity: 1,
  };

  // TRAIGO LO QUE ESTA EN LOCAL STORAGE
  const storageCart = JSON.parse(localStorage.getItem("Products"));

  if (storageCart !== null) {
    // SI YA EXISTE UN LOCAL STORAGE LO ACTUALIZO
    storageCart.unshift(productAdd);
    localStorage.setItem("Products", JSON.stringify(storageCart));
    console.log('hola')
  } else {
    // SI NO EXISTE UN LOCAL STORAGE LO CONSTRUYO
    productsList.unshift(productAdd);
    localStorage.setItem("Products", JSON.stringify(productsList));
    console.log("hola");

  }

  // let cart = localStorage.getItem("cart");
  // if (cart == "") {
  //   localStorage.setItem(JSON.parse(productAdd));
  // } else {
  // }
};

export default addProduct;
