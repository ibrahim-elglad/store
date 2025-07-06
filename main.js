let list=document.querySelector(".category_nav_list");
let favorit=document.getElementById("favorit")
let btnBuy=document.getElementById("btnBuy")




function opencategorylist(){
    list.classList.toggle("active");
}

function BuyProduct(){
    btnBuy.classList.toggle("active")
    
}



function bold(){
    favorit.classList.toggle("bold")
}