const WHATSAPP_NUMBER = "91XXXXXXXXXX"; // Replace with FRSH WhatsApp Business number
const item = document.getElementById("item");
const qty = document.getElementById("qty");
const wa = document.getElementById("wa");

function order(){
  const quantity = Number.parseInt(qty.value, 10);

  if (!Number.isInteger(quantity) || quantity < 1) {
    alert("Please enter a valid quantity of at least 1.");
    qty.focus();
    return;
  }

  const message = `Hey FRSH! 🍉 I’d like to order: ${item.value}. Quantity: ${quantity}. Please share delivery & payment details.`;
  if (WHATSAPP_NUMBER.includes("X")) {
    alert("Add your WhatsApp Business number in script.js first (example: 919876543210).");
    return;
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}
wa.addEventListener("click", order);
document.querySelectorAll("[data-plan]").forEach(btn => btn.addEventListener("click", () => {
  item.value = btn.dataset.plan + " subscription";
  document.querySelector("#order").scrollIntoView({behavior:"smooth"});
}));
document.getElementById("year").textContent = new Date().getFullYear();
