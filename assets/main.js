(function () {
  // Year in footer
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Mobile nav
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Contact form: mailto fallback (replace with your backend / form provider in production)
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);

      const name = encodeURIComponent(data.get("name"));
      const email = encodeURIComponent(data.get("email"));
      const company = encodeURIComponent(data.get("company") || "");
      const need = encodeURIComponent(data.get("need"));
      const message = encodeURIComponent(data.get("message"));

      const subject = `DBD.NET Inquiry: ${decodeURIComponent(need)} (${decodeURIComponent(name)})`;
      const body =
        `Name: ${decodeURIComponent(name)}\n` +
        `Email: ${decodeURIComponent(email)}\n` +
        `Company: ${decodeURIComponent(company)}\n` +
        `Need: ${decodeURIComponent(need)}\n\n` +
        `Message:\n${decodeURIComponent(message)}\n`;

      window.location.href = `mailto:info@dbd.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
})();