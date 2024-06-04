const humbugerIcon = document.querySelector(".humbuger-icon");
const humbugerLinks = document.querySelector(".humbuger-menu-links");
var isOpen = false;

humbugerIcon.addEventListener("click", () => {
  if (!isOpen) {
    humbugerLinks.style.display = "inline-block";
    humbugerIcon.classList.add("open");

    document.querySelector(".logo").style.marginTop = "-30px";
    isOpen = true;
  } else {
    humbugerLinks.style.display = "none";
    humbugerIcon.classList.remove("open");
    isOpen = false;
  }
});

function sendMail() {
  let params = {
    fullname: document.getElementById("fullname").value,
    email: document.getElementById("email").value,
    //subject: document.getElementById("subject").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_h3cwkks", "template_t1qsd6r", params)
    .then(alert("Email has been sent!"));
}
