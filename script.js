const menu=document.getElementById("menu");

const offScreenMenu=document.querySelector(".off-screenmenu");

menu.addEventListener("click",()=>{
    offScreenMenu.classList.add("active");
    menu.style.display="none";
})
offScreenMenu.addEventListener("click",()=>{
    offScreenMenu.classList.remove("active");
    menu.style.display="flex";
})





