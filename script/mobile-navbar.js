const menuNav = document.querySelector("#menuNav")

const btnNav = document.querySelector("#btn-nav")

function openNav(){
    
    menuNav.style.height = "100%";

    btnNav.style.visibility = "hidden";
}

function closeNav(){

    menuNav.style.height = "0%";

    btnNav.style.visibility = "visible";
}
