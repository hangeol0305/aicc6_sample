// menu toggle

const menu = document.querySelector(".menu");
const icon = document.querySelector(".menu i"); 

menu.addEventListener("click", function(){
    this.classList.toggle("active")

    //if(this.classList.contains('active'))  
    //{ console.log("있다");
    // icon.setAttribute("class","ri-close-line");
    //} else {
    // console.log("없다");
    // icon.setAttribute("class","ri-menu-line");
    //}

    this.classList.contains('active') ? icon.setAttribute("class","ri-close-line"): icon.setAttribute("class","ri-menu-line");
 })

console.log(menu);