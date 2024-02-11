let proudcsInCart = localStorage.getItem("proudcsInCart")
let allproducts = document.querySelector(".products");


if(proudcsInCart){
    let item  = JSON.parse(proudcsInCart);
    drawCartProducts(item);
}

function  drawCartProducts(){
    let y = products.map((item) => {
      return `
          <div class="product_item">
      <img class="product_item_img" src="${item.imageUrl}" alt="">
      <div class="product_item_desc">
          <h2>${item.title}</h2>
          <p>the new car in 19 300km in hour</p>
          <span>${item.color}</span>
          </div>
          <div class="product_item_action">
          <button style={ background-color: green;} class="add_to_cart" onClick="removeFromCart(${item.id})">Remove from Cart</button>
          
          </div>
      </div>
      `;
    });
    allproducts.innerHTML = y;
  }

