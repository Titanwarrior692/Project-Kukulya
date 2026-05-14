(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();

(function () {
  var form = document.querySelector("#contact-form");
  if (!form) return;

  var success = document.querySelector(".form-success");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (success) {
      success.classList.add("is-visible");
      success.textContent =
        "Thanks — we received your message. We will reply within one business day.";
    }
    form.reset();
    success && success.focus();
  });
})();
