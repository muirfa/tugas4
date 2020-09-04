var x = document.getElementById("emaila");
var p = document.getElementById("passworda");

document.getElementById("formA").addEventListener("submit",(ee)=>{
    ee.preventDefault();
    // email & password
    if (x.value=="admin@gmail.com" && p.value=="123456"){
        swal.fire({
            title: 'Wellcome',
            html: 'Access granted',
            type: 'success'
        });
        setTimeout(() =>{
          loadPage();  
        },3000);
    } 
    else{
        swal.fire({
            title: 'ERROR',
            html: 'Access granted',
            type: 'error'
        });
    }
    function loadPage(){
        window.location.href="./admin/admin.html";
    }
});