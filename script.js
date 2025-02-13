const menu=document.getElementById("menu");
const close=document.getElementById("close");

const offScreenMenu=document.querySelector(".off-screenmenu");

menu.addEventListener("click",()=>{
    offScreenMenu.classList.add("active");
    menu.style.display="none";
})
close.addEventListener("click",()=>{
    offScreenMenu.classList.remove("active");
    menu.style.display="flex";
})





