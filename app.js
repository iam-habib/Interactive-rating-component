const rating = document.querySelector(".rating");
const btns = document.querySelectorAll(".btn");
const submit = document.querySelector(".submit");
const thankYou = document.querySelector(".thank-you");
const container = document.querySelector(".container");
const reSubmit = document.querySelector(".re-submit");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    rating.innerHTML = btn.innerHTML;
  });
});

submit.addEventListener("click", function () {
  thankYou.classList.remove("hidden");
  container.classList.add("hidden");

  rating.textContent = `You Selected ${rating.innerHTML} out of 5 `;
});

reSubmit.addEventListener("click", function () {
  thankYou.classList.add("hidden");
  container.classList.remove("hidden");
});
