let userInfo = document.querySelector("#user_info");
let userData = document.querySelector("#user");
let links = document.querySelector("#links");
if (localStorage.getItem("username")) {
  links.remove();
  userInfo.style.display = "flex";
  userData.innerHTML = localStorage.getItem("username");
}

let logOutBtn = document.querySelector("#logout")
logOutBtn.addEventListener("click" , function(){
  localStorage.clear();
  setTimeout(()=>{
    window.location = "login.html";
  } , 1500)
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// localStorage.setItem("stu1" , 4)
// console.log(localStorage.getItem("stu1")) //هتشتغل عادي علشان المسافة مظبوطة

// localStorage.setItem("stu1" , 4)
// console.log(localStorage.getItem("stu1 ")) // مش هتشتغل عادي علشان المسافة مش مظبوطة

// localStorage.setItem("stu1 a" , 4)
// console.log(localStorage.getItem("stu1 a")) // هتشتغل عادي علشان المسافة مظبوطة فى الي في النصف مظبوطة

// key and value بنخزنها علي هيئة  localstorage  لاحظ ان اى حاجة عوزين نخزنها في ال

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// localStorage.setItem("stu1" , 4)
// console.log(localStorage.getItem("stu1"))

// localStorage.setItem("student car" , "arabiya")

// localStorage.removeItem("stu1" , 4)

// localStorage.clear("stu1" , 4)// localstorage  بتمسح كل  حاجة في ال
///////////////////////////////////////////////////////////////////////////////////

let allproducts = document.querySelector(".products");
let products = [
  {
    id: 1,
    title: "car1",
    color: "black",
    imageUrl: "images/car1.jfif",
  },
  {
    id: 2,
    title: "car2",
    color: "yellow",
    imageUrl: "images/car2.jfif",
  },
  {
    id: 3,
    title: "car3",
    color: "gray",
    imageUrl: "images/car3.jfif",
  },
  {
    id: 4,
    title: "car4",
    color: "red",
    imageUrl: "images/car4.jfif",
  },
  {
    id: 5,
    title: "car5",
    color: "blue",
    imageUrl: "images/car5.jfif",
  },
  {
    id: 1,
    title: "car1",
    color: "black",
    imageUrl: "images/car6.jfif",
  },
  {
    id: 2,
    title: "car2",
    color: "yellow",
    imageUrl: "images/car7.jfif",
  },
  {
    id: 3,
    title: "car3",
    color: "gray",
    imageUrl: "images/car8.jfif",
  },
  {
    id: 4,
    title: "car4",
    color: "red",
    imageUrl: "images/car9.jfif",
  },
  {
    id: 5,
    title: "car5",
    color: "blue",
    imageUrl: "images/car10.jfif",
  },
  {
    id: 1,
    title: "car1",
    color: "black",
    imageUrl: "images/car11.jfif",
  },
  {
    id: 2,
    title: "car2",
    color: "yellow",
    imageUrl: "images/car12.jfif",
  },
  {
    id: 3,
    title: "car3",
    color: "gray",
    imageUrl: "images/car13.jfif",
  },
  {
    id: 4,
    title: "car4",
    color: "red",
    imageUrl: "images/car3.jfif",
  },
  {
    id: 5,
    title: "car5",
    color: "blue",
    imageUrl: "images/car5.jfif",
  },
];
function drawItems() {
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
        <button style={ background-color: green;} class="add_to_cart" onClick="addtocart(${item.id})">Add To Cart</button>
        <i class="far fa-heart fav"></i>
        </div>
    </div>`;
  });
  allproducts.innerHTML = y;
}
drawItems()


let cartproductDiv = document.querySelector(".carts_products div")
let badge = document.querySelector(".badge")

// let addedItem= [];
let addedItem = localStorage.getItem("proudcsInCart")?JSON.parse(localStorage.getItem("proudcsInCart")):[];
if(addedItem){
  addedItem.map(item =>{
    cartproductDiv.innerHTML += `<p>${item.title}</p>`
  })
  badge.style.display ="block";
  badge.innerHTML = addedItem.length ;
}
//////////////////////////////////


if(localStorage.getItem=("username")){
  function addtocart(id){
    let choosenItem = products.find((item)=>item.id === id);
    cartproductDiv.innerHTML +=`<p>${choosenItem.title}</p>`


    addedItem=[...addedItem , choosenItem]
    localStorage.setItem("proudcsInCart" , JSON.stringify(addedItem))
    let cartproducslenght = document.querySelectorAll(".carts_products div p")
    badge.style.display ="block"
    badge.innerHTML = cartproducslenght.length;
}
}else{
    window.location = "login.html"
  }

    ///////////////////////////////////////////////////////////////////////////
let chopingcart = document.querySelector(".shopping_cart")
let cartsproducts = document.querySelector(".carts_products")
chopingcart.addEventListener("click" , opencart)

function opencart(){
    if(cartproductDiv.innerHTML !=""){
        if(cartsproducts.style.display=="block"){
            cartsproducts.style.display="none"
        }else{
            cartsproducts.style.display="block"
        }
    }
}