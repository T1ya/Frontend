const productContainer = document.getElementById("product-list");
const filterForm = document.getElementById("filter-form");
// const categorySelect = filterForm.elements["category-select"];
const categorySelect = document.getElementById("category-select");

filterForm.addEventListener("submit", (event)=>{
  event.preventDefault();
  const categoryId = filterForm.elements["category"].value;
  fetchProducts(categoryId);
})

async function fetchProducts(categoryId) {
  const queryString = categoryId ? `/?categoryId=${categoryId}` : ""; //filter by cat
  try {
    const res = await fetch(
      `https://api.escuelajs.co/api/v1/products${queryString}`
    );
    if (!res.ok) {
      throw new Error(`Ошибка загрузки: ${res.status}`);
    }
    const products = await res.json();
    fillProductList(products);
  } catch (error) {
    console.error(error.message);
  }
}

async function fetchDeleteProduct(id) {
  await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    method: "DELETE"
  });
}

async function fetchCategories() {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/categories");
    if (!res.ok) {
      throw new Error(`Ошибка загрузки: ${res.status}`);
    }
    const categories = await res.json();
    console.log(categories);

    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category.id;
      option.innerText = category.name;
      categorySelect.appendChild(option);
    });
  } catch (error) {
    console.error(error.message);
  }
}

function fillProductList(obj) {
  while (productContainer.firstChild) {
    productContainer.removeChild(productContainer.firstChild);
  }
  obj.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product");

    const productTitle = document.createElement("span");
    productTitle.classList.add("title");
    const productPrice = document.createElement("span");
    const productImg = document.createElement("img");
    const productDescription = document.createElement("span");
    const deleteBtn = document.createElement("Button");

    productTitle.innerText = product.title;
    productPrice.innerText = `€ ${product.price}`;
    productImg.src = product.images[0];
    productImg.alt = product.images[1];
    productDescription.innerText = product.description;
    deleteBtn.innerText="Delete";
    deleteBtn.type = "button";
    deleteBtn.onclick = async ()=>{
      await fetchDeleteProduct(product.id);
      fetchProducts();
    }
    //black magic!
    productImg.referrerPolicy = "no-referrer";
    productImg.crossOrigin = "anonymous";

    productCard.append(
      productTitle,
      productImg,
      productPrice,
      productDescription,
      deleteBtn
    );

    productContainer.appendChild(productCard);
  });
}

fetchCategories();
fetchProducts();
