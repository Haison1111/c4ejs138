const productList = [
    {
        nameProduct : "san pham 1"
    },
    {
        nameProduct : "san pham 2"
    },
    {
        nameProduct : "san pham 3"
    },
    {
        nameProduct : "san pham 4"
    },
];
const containerProduct = document.getElementById("container_product");
let stringHtml = "" ;
for ( let product of productList){
    // console.log(product)
    stringHtml += `
    <div class="card">
      <div class="imgBx">
        <img
          src="https://cdn.shopify.com/s/files/1/0562/0246/1348/products/sneakers_db02a659-688a-4c73-a049-fa451c3e7c23.jpg?v=1619065705&width=713"
          alt="nike-air-shoe"
        />
      </div>

      <div class="contentBx">
        <h2>${product.nameProduct}</h2>

        <div class="size">
          <h3>Size :</h3>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>

        <div class="color">
          <h3>Color :</h3>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a href="#">Buy Now</a>
      </div>
    </div>
  </div>
`
}

containerProduct.innerHTML = stringHtml;