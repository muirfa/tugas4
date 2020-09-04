// global
var products=[];
var cartItems=[];
var cart_n= document.getElementById("cart_n");

// divs
var ProductDiv=document.getElementById("ProductDiv");
var PromoDiv=document.getElementById("PromoDiv");
var EquipmentDiv=document.getElementById("EquipmentDiv");


// information
var PRODUCT=[
  {name: 'Product #1',price:10000},
  {name: 'Product #2',price:20000},
  {name: 'Product #3',price:30000},
  {name: 'Product #4',price:40000},
];
var PROMO=[
  {name:'Promotion',price:100000},
];
var EQUIPMENT=[
  {name:'Equipment',price:250000},
];
// HTML
function HTMLcoffeeProduct(con){
  let URL = `./assets/kopi${con}.jpg`;
  let btn = `btnPRODUCT${con}`;
  return `
        <div class="col-md-6">
        <div class="card mb-4 shadow-sm">
        <div class="cardImg">
        <img class="card-img-top" style="height: 19rem;" src="${URL}" 
        alt="Card Image">
        </div>
        <div class="card-body">
        <i style="color:orange;" class="fa fa-star"></i>
        <i style="color:orange;" class="fa fa-star"></i>
        <i style="color:orange;" class="fa fa-star"></i>
        <i style="color:orange;" class="fa fa-star"></i>
        <i style="color:orange;" class="fa fa-star"></i>
        <p class="card-text">${PRODUCT[con-1].name}</p>
        <p class="card-text">Price: Rp ${PRODUCT[con-1].price},-</p>
        <div class="d-flex justify-content-between align-item-center">
        <div class="btn-group">
        <button type="button" onclick="cart2('${PRODUCT[con-1].name}',
        '${PRODUCT[con-1].price}','${URL}','${con}','${btn}')" 
        class="btn btn-sm btn-outline-secondary">
        <a style="color:inherit;" href="cart.html">Buy</a></button>
        <button id="${btn}" type="button" onclick="cart('${PRODUCT[con-1].name}',
        '${PRODUCT[con-1].price}','${URL}','${con}','${btn}')"
        class="btn btn-sm btn-outline-secondary">Add to cart</button>
        </div>
        <small class="text-muted">Free Shipping</small>
        </div>
        </div>
        </div>
        </div>
  `
}
function HTMLpromotionProduct(){
  let URL=`assets/carousel/gb1.jpg`;
  let btn=`btnpromo`;
  return`
    <div class="row featurette">
    <div class="col-md-7">
      <h2 id="Promo" style="padding-top:70px;">Promotion</h2>
      <p class="lead">
      Untuk pembelian 12 Botol Kopi SUSU
      <h3>Rp ${PROMO[0].price},-<h3>
      <button type="button" onclick="cart2('${PROMO[0].name}','${PROMO[0].price}',
      '${URL}','0','${btn}')" class="btn btn-sm btn-outline-secondary"><a style="color:inherit;"
      href="cart.html">Buy</a></button>
      <button id="${btn}" type="button" onclick="cart('${PROMO[0].name}',
      '${PROMO[0].price}','${URL}','0','${btn}')"
      class="btn btn-sm btn-outline-secondary">Add to cart</button>
      </div>
      <div class="col-md-5">
      <img src="assets/kopi2.jpg" width="400" height="500">
      </div>
      </div>

  `
}
function HTMLequipmentProduct(){
  let URL=`assets/carousel/gb3.jpg`;
  let btn=`btnequipment`;
  return`
    <div class="row featurette">
    <div class="col-md-7 order-md-2">
      <h2 id="Equipment" style="padding-top:70px;">Coffee Equipment</h2>
      <p class="lead">
      Alat Saring Kopi V60
      <br/>Terbuat dari bahan pilihan yang bisa memberikanmu pengalaman ngopi dirumah</p>
      <h3>Rp ${EQUIPMENT[0].price},-<h3>
      <button type="button" onclick="cart2('${EQUIPMENT[0].name}','${EQUIPMENT[0].price}',
      '${URL}','0','${btn}')" class="btn btn-sm btn-outline-secondary"><a style="color:inherit;"
      href="cart.html">Buy</a></button>
      <button id="${btn}" type="button" onclick="cart('${EQUIPMENT[0].name}',
      '${EQUIPMENT[0].price}','${URL}','0','${btn}')"
      class="btn btn-sm btn-outline-secondary">Add to cart</button>
      </div>
      <div class="col-md-5 order-md-1">
      <img src="assets/equipment.png" width="400" height="300">
      </div>
      </div>
  `
}
// Animasi
function animation(){
  const toast=swal.mixin({
    toast:true,
    position:'top-end',
    showConfirmButton:false,
    timer:1000
  });
  toast.fire({
    icon :'success',
    title: 'added to shopping cart'
  })
}
// cart function, var, let
function cart(name,price,url,con,btncart){
  var item={
    name:name,
    price:price,
    url:url
  }
  cartItems.push(item);
  let storage = JSON.parse(localStorage.getItem("cart"));
  if (storage==null){
    products.push(item);
    localStorage.setItem("cart",JSON.stringify(products));
  }
  else{
    products = JSON.parse(localStorage.getItem("cart"));
    products.push(item);
    localStorage.setItem("cart",JSON.stringify(products));
  }
  products= JSON.parse(localStorage.getItem("cart"));
  cart_n.innerHTML=`[${products.length}]`;
  document.getElementById(btncart).style.display="none";
  animation();
}

function cart2(name,price,url,con,btncart){
  var item={
    name:name,
    price:price,
    url:url,
  }
  cartItems.push(item);
  let storage= JSON.parse(localStorage.getItem("cart"));
  if (storage==null){
    products.push(item);
    localStorage.setItem("cart",JSON.stringify(products));
  }
  else{
    products= JSON.parse(localStorage.getItem("cart"));
    products.push(item);
    localStorage.setItem("cart",JSON.stringify(products));
  }
  products=JSON.parse(localStorage.getItem("cart"));
  cart_n.innerHTML=`[${products.length}]`;
  document.getElementById(btncart).style.display="none";
}
function render(){
  for(let index = 1; index  <=4; index++){
    ProductDiv.innerHTML+=`${HTMLcoffeeProduct(index)}`;
  }
  PromoDiv.innerHTML+= `${HTMLpromotionProduct()}`;
  EquipmentDiv.innerHTML+=`${HTMLequipmentProduct()}`;
  if (localStorage.getItem("cart")==null){

  }
  else{
    products=JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
  }
};
