// global
var products= JSON.parse(localStorage.getItem('cart'));
var cartItems=[];
var cart_n = document.getElementById('cart_n');
var table= document.getElementById('table');
var total=0;

// HTML
function tableHTML(i){
    return`
    <tr>
    <th scope="row">${i+1}</th>
    <td><img style=" height: 50px; width: 80px;" src="${products[i].url}"></td>
    <td>${products[i].name}</td>
    <td>1</td>
    <td>Rp ${products[i].price},-</td>
    </tr>
    `;
}

// buy
function buy(){
    var d= new Date();
    var t= d.getTime();
    var counter= t;
    counter+=1;
    let db=firebase.database().ref('order/'+counter);
    let itemdb={
        id:counter,
        order:counter-895,
        total:total
    }
    db.set(itemdb);
    swal.fire({
        position:'center',
        type:'success',
        title: 'Purchase made successfully',
        text: `Your purchase order is : ${itemdb.order}`,
        showConfirmButton: true,
        timer:50000
    });
    clean();
}
function clean(){
    localStorage.clear();
    for (let index = 0; index < products.length; index++){
        table.innerHTML+= tableHTML(index);
        total= total+parseInt(products[index].price);
    }
    total=0;
    table.innerHTML=`
    <tr>
    <th></th>
    <th></th>
    <th></th>
    </tr>
    `;
    cart_n.innerHTML='';
    document.getElementById("btnBuy").style.display="none";
    document.getElementById("btnClean").style.display="none";
}

// render
function render(){
    for (let index = 0; index < products.length; index++) {
        table.innerHTML+= tableHTML(index);
        total=total+parseInt(products[index].price);
    }
    table.innerHTML+=`
    <tr>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col">Total:Rp ${total},-</th>
    </tr>
    <tr>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col">
        <button id="btnClean" onclick="clean()" class="btn text-white btn-warning">
        Clean Shoping Cart
        </button>
    </th>
    <th scope="col">
        <button id="btnBuy" onclick="buy()" class="btn btn-success">
        Buy
        </button>
    </th>
    </tr>
    `;
    products=JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
}