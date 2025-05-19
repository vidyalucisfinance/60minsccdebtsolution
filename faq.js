document.addEventListener("DOMContentLoaded", function () {
  const faqs = document.querySelectorAll(".faq-item");

  faqs.forEach((item) => {
    item.addEventListener("click", () => {
      const content = item.querySelector(".faq-answer");
      const icon = item.querySelector(".arrow");

      content.classList.toggle("active");
      icon.classList.toggle("open");
    });
  });
});
