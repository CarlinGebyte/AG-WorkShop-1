const showProducts = async (array, cards) => {
  const products = await array;
  products.forEach((product) => {
    const { id, name, img, price } = product;
    const card = `
        <div class="card" value="${id}">
            <img src="${img}" value="${id}" class="card-img-top"
                alt="product" />
            <div class="card-body" value="${id}">
                <h5 class="card-title" value="${id}">${name}</h5>
                <h5 class="card-title" value="${id}">${price}</h5>
            </div>
        </div>
    `;
  });
};

export default showProducts;
