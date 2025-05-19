document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const arrow = question.querySelector(".arrow");

      answer.classList.toggle("active");
      arrow.classList.toggle("open");
    });
  });
});
