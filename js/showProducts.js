const showProducts = async (array, cards) => {
  const products = array;
  console.log(products);
  products.forEach((product) => {
    const { id, name, img, price } = product;
    cards.innerHTML += `
        <article class="prince-card">
					<figure class="prince-cardImg"><img src="${img.img1}" value="${id}" class="card-img-top"
                alt="product" /></figure>
					<div class="prince-cardDetails">
						<h5 class="card-title" value="${id}">${name}</h5>
						<h5 class="card-title" value="${id}">${price}</h5>
					</div>
				</article>
    `;
  });
};

export default showProducts;
