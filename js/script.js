const url = "https://fresh-prince-ag.herokuapp.com/Products/";
const menu = document.querySelector("#menu");
const dropdown = document.querySelector("#burger");
const line = document.querySelector(".prince-navLine");
const link = document.querySelectorAll(".prince-navMenu-link");
const cart = document.getElementById("cart-icon");
const closeCart = document.getElementById("close-cart");
const removeProduct = document.getElementById("cart-items");
console.log(removeProduct);

/* SHOW MENU */
dropdown.addEventListener("click", () => {
  menu.classList.toggle("show");
  line.classList.toggle("active");
});

/* HIDDEN MENU */
link.forEach((n) =>
  n.addEventListener("click", () => {
    menu.classList.remove("show");
    line.classList.remove("active");
  })
);

cart.addEventListener("click", () => {
  updateCartContent();
});

const updateCartContent = () => {
  const modalCart = document.getElementsByClassName("carrito");
  const cartItems = document.getElementById("cart-items");
  let cartLocal = JSON.parse(localStorage.getItem("Products"));
  console.log(cartLocal[0]);
  modalCart[0].style.display = "flex";
  cartItems.innerHTML = "";
  cartLocal.forEach((product) => {
    const { id, name, img, price, quantity } = product;
    cartItems.innerHTML += `
		<div class="seccion1">
			<div>
				<img src="${img.img1}" alt="Img producto comrar" />
			</div>
			<div>
				<h2>${name}</h2>
				<p><span> S </span> $${price}</p>
			</div>
			<div>
				<p class="cantidad">${quantity}</p>
				<p class="remove-button" id="${id}">Remove</p>
			</div>
        </div>
	`;
  });
};

closeCart.addEventListener("click", () => {
  const cartModal = document.getElementsByClassName("carrito");
  cartModal[0].style.display = "none";
});

removeProduct.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.classList.contains("remove-button")) return;
  let id = target.id;

  const local = JSON.parse(localStorage.getItem("Products"));

  const buscar = local.find((data) => data.id === Number(id));

  local.forEach((elemet, index) => {
    if (elemet.id === buscar.id) {
      local.splice(index, 1);
      localStorage.setItem("Products", JSON.stringify(local));
  updateCartContent();

    }
  });
  console.log(local);
});
