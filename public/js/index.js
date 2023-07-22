function btn_login(){
    localStorage.setItem("name", "mohit")
}
// console.log(localStorage.getItem("name"));

function btn_logout(){
    localStorage.removeItem("name");
}
console.log(localStorage.getItem("name"));




if( localStorage.getItem("name")){
    var element = document.getElementById('login-1');
    element.classList.add("d-none");
    var element_1 = document.getElementById('login-2');
    element_1.classList.remove("d-none");
}else if( !localStorage.getItem("name")){
    var element = document.getElementById('login-1');
    element.classList.remove("d-none")
    var element_1 = document.getElementById('login-2');
    element_1.classList.add("d-none");
}

