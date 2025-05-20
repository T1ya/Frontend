const form = document.getElementById("create-product-form");

function addProductHandler(event) {
  event.preventDefault();
  const title = form.elements["title"].value;
  const description = form.elements["description"].value;
  const price = form.elements["price"].value;
  const image = form.elements["image"].value.trim();

  const newProduct = {
    title,
    description,
    price,
    images: [image],
    categoryId: 1,
  };

  fetch("https://api.escuelajs.co/api/v1/products", {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Ответ от API:", data);
    });
}

form.addEventListener("submit", addProductHandler);
