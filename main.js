

// sidebar
var menuBtn= document.getElementById("menuBtn")
var sideNav = document.getElementById("sideNav")
var menuBox = document.getElementById("menuBox")

sideNav.style.right = "-250px";

menuBtn.onclick = function(){
    
    if(sideNav.style.right == "-250px"){
       sideNav.style.right = "0";
       menuBox.src = "img/close.png";
    }
    else{
        sideNav.style.right = "-250px";
        menuBox.src = "img/menu.png";
    }
}

