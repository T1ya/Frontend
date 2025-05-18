
const productContainer = document.getElementById("product-list");
async function fetchData() {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    if (!res.ok) {
      throw new Error(`Ошибка загрузки: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);

    fillProductList(data);
  } catch (error) {
    console.error(error.message);
  }
}

function fillProductList(obj) {
  obj.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product");

    const productTitle = document.createElement("h3");
    const productPrice = document.createElement("p");
    const productImg = document.createElement("img");
    const productDescription = document.createElement("span");
    productTitle.innerText = product.title;
    productPrice.innerText = `€${product.price}`;
    productImg.src = product.images[0];
    productImg.alt = product.slug;
    //black magic!
    productImg.referrerPolicy = "no-referrer";
    productImg.crossOrigin = "anonymous";
    productImg.onerror = () => {
      productImg.src = "https://via.placeholder.com/150?text=No+Image";
    };

    productCard.appendChild(productTitle);
    productCard.appendChild(productImg);
    productCard.appendChild(productPrice);

    productContainer.appendChild(productCard);
  });
}

fetchData();
