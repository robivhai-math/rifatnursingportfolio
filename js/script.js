const menu=document.querySelector(".menu-toggle"),links=document.querySelector(".nav-links");
menu.addEventListener("click",()=>links.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
const topBtn=document.getElementById("topBtn");
window.addEventListener("scroll",()=>{topBtn.style.display=window.scrollY>500?"block":"none"});
topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
