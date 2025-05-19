document.querySelectorAll(".faq-question").forEach((item) => {
  item.addEventListener("click", () => {
    const answer = item.nextElementSibling;
    const icon = item.querySelector(".faq-toggle");

    answer.classList.toggle("active"); // Show/hide answer
    icon.classList.toggle("rotated"); // Optional: rotate icon
  });
});
