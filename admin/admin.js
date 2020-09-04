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

// render
function renderTable(){
    var order= firebase.database().ref('order/');
    order.on("child_added",function(data){
        var orderValue= data.val();
        document.getElementById("table").innerHTML+=`
        <tr>
            <td>${orderValue.id}</td>
            <td>${orderValue.order}</td>
            <td>${orderValue.total}</td>
        </tr>
        `;
    });
};

