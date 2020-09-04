// firebase
var firebaseConfig = {
    apiKey: "AIzaSyDdE-0GBcGua5XH5IsH4w9NCs8hPPS97Eo",
    authDomain: "coffee-shop-e1c05.firebaseapp.com",
    databaseURL: "https://coffee-shop-e1c05.firebaseio.com",
    projectId: "coffee-shop-e1c05",
    storageBucket: "coffee-shop-e1c05.appspot.com",
    messagingSenderId: "815217144874",
    appId: "1:815217144874:web:8e8f65c6e8703e36acff53",
    measurementId: "G-64X2GNG8F6"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// global
var d= new Date();
var t=d.getTime();
var counter=t;

// form
document.getElementById("form").addEventListener("submit",(e) =>{
    var order=document.getElementById("order").value;
    var total=document.getElementById("total").value;
    e.preventDefault();
    createOrder(order,total);
    form.reset();
});

// create new order
function createOrder(order,total){
    counter+=1;
    var newOrder={
        id:counter,
        order:order,
        total:total
    }
    let db=firebase.database().ref('order/'+counter);
    db.set(newOrder);
    document.getElementById("cardSection").innerHTML='';
    readOrder();
}

function readOrder(){
    var order= firebase.database().ref('order/');
    order.on("child_added",function(data){
        var orderValue=data.val();
        document.getElementById("cardSection").innerHTML+=`
        <div class="card mb-3">
        <div class="card-body">
        <h5 class="card-title">Order: ${orderValue.order}</h5>
        <p class="card-text">Total: ${orderValue.total}</p>
        <button type="submit" style="color: white" class="btn btn-warning" 
        onclick="updateOrder(${orderValue.id}, '${orderValue.order}','${orderValue.total}')">
        Edit Order</button>
        <button type="submit" class="btn btn-danger" onclick="deleteOrder(${orderValue.id})">
        Delete Order</button>
        </div>
        </div>
        `;
    });
}
function reset(){
    document.getElementById("firstSection").innerHTML=`
    <form class="border p-4 mb-4" id="form">
    <div class="form-group">
        <label>Order</label>
        <input type="text" class="form-control" id="order" placeholder="order">
    </div>
    <div class="form-group">
        <label>Total</label>
        <input type="text" class="form-control" id="total" placeholder="total">
    </div>
    <button type="submit" id="button1" class="btn btn-primary">
        <i class="fas fa-plus"></i>  Add order
    </button>
    <button style="display: none" id="button2" class="btn btn-success"></button>
    <button style="display: none" id="button3" class="btn btn-danger"></button>
</form>
    `;
    document.getElementById("form").addEventListener("submit",(e) =>{
        var order= document.getElementById("").value;
        var total= document.getElementById("").value;
        e.preventDefault();
        createOrder(order,total);
        form.reset();
    });
}
function updateOrder(id, order, total){
    document.getElementById("firstSection").innerHTML=`
    <form class="border p-4 mb-4" id="form2">
    <div class="form-group">
        <label>Order</label>
        <input type="text" class="form-control" id="order" placeholder="order">
    </div>
    <div class="form-group">
        <label>Total</label>
        <input type="text" class="form-control" id="total" placeholder="total">
    </div>
    <button style="display: none" type="submit" id="button1" class="btn btn-primary">
        <i class="fas fa-plus"></i>  Add order
    </button>
    <button  id="button2" class="btn btn-success">Update Order</button>
    <button  id="button3" class="btn btn-danger">Cancel</button>
</form>
    `;
    document.getElementById("form2").addEventListener("submit",(e)=>{
        e.preventDefault();
    });
    document.getElementById("button3").addEventListener("click",(e)=>{
        reset();
    });
    document.getElementById("button2").addEventListener("submit",(e)=>{
        updateOrder2(id, document.getElementById("order").value,document.getElementById("total").value);
    });
    document.getElementById("order").value=order;
    document.getElementById("total").value=total;
}
function updateOrder2(id,order,total){
    var orderUpdated={
        id:id,
        order:order,
        total:total
    }
    let db= firebase.database().ref("order/"+id);
    db.set(orderUpdated);
    document.getElementById("cardSection").innerHTML="";
    readOrder();
    reset();
}
function deleteOrder(id){
    var order=firebase.database().ref("order/"+id);
    order.remove();
    reset();
    document.getElementById("cardSection").innerHTML="";
    readOrder();
}