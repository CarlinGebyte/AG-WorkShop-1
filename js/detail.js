import getProducts from "./getProducts.js";
const modal = document.getElementById("");

const modalDetail = async (url, idProduct) => {
  const product = await getProducts(url + idProduct);
  const { id, name, img, price, description, size } = product;
  modal.innerHTML = "";
  modal.innerHTML = `
      <div class="primeraParte">
        <img src="${img.img1}" alt="" />
        <img src="${img.img2}" alt="" />
        <img src="${img.img3}" alt="" />
        <img src="${img.img4}" alt="" />
      </div>
      <div class="segundaParte">
        <img src="${img.img1}" alt="" />
        <img src="${img.img2}" alt="" />
        <img src="${img.img3}" alt="" />
        <img src="${img.img4}" alt="" />
      </div>
      <div class="terceraParte">
        <h2>${name}</h2>
        <h3>$ <span> ${price}</span></h3>
        <h4>Size</h4>
        <div class="tallas">
          <div class="talla">${size.s}</div>
          <div class="talla">${size.m}</div>
          <div class="talla">${size.l}</div>
          <div class="talla">${size.xl}</div>
          <div class="talla">${size.xxl}</div>
        </div>
        <div class="flex">
            <button class="btns add" value="${id}">ADD TO CARD</button>
            <button class="btns buy" value="${id}">BUY IT NOW</button>
        </div>
        <h4>
          ${description}
        </h4>
        
        <h4><u>Click for Sizing</u></h4>
      </div>
  `;
};

export default modalDetail;