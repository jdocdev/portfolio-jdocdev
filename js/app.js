// Desplazamiento suave entre secciones desde la nav
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Desplazamiento suave entre secciones desde botones con clase .button--nav
const buttons = document.querySelectorAll(".button--nav");
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Limpiar el formulario luego de ser enviado
window.onload = function() {
  var form = document.getElementById("contact__form");
  form.reset();
};

// Cambio de tema Dark <> Light
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
        document.body.classList.toggle('light');
});
