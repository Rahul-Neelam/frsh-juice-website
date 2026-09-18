const WHATSAPP_NUMBER = "917702519019";
const item = document.getElementById("item");
const qty = document.getElementById("qty");
const wa = document.getElementById("wa");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav-links");

function cleanQuantity(){const quantity=Number.parseInt(qty.value,10);return Number.isInteger(quantity)&&quantity>0?quantity:1}
function order(){const quantity=cleanQuantity();qty.value=quantity;const message=`Hey FRSH! 🍉 I’d like to order ${quantity} × ${item.value}. Please confirm the juice rotation, delivery schedule and payment details.`;window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer")}
minus.addEventListener("click",()=>{qty.value=Math.max(1,cleanQuantity()-1)});
plus.addEventListener("click",()=>{qty.value=cleanQuantity()+1});
wa.addEventListener("click",order);
document.querySelectorAll("[data-plan]").forEach(button=>{button.addEventListener("click",()=>{item.value=button.dataset.plan;document.getElementById("order").scrollIntoView({behavior:"smooth"})})});
menuToggle.addEventListener("click",()=>{const isOpen=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(isOpen));menuToggle.textContent=isOpen?"Close":"Menu";document.body.classList.toggle("menu-open",isOpen)});
nav.querySelectorAll("a").forEach(link=>{link.addEventListener("click",()=>{nav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");menuToggle.textContent="Menu";document.body.classList.remove("menu-open")})});
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}})},{threshold:.12});
document.querySelectorAll(".reveal").forEach(element=>observer.observe(element));
document.getElementById("year").textContent=new Date().getFullYear();
