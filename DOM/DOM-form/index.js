// Donation type selection
const giveOnceBtn = document.getElementById("giveOnce");
const donateMonthlyBtn = document.getElementById("donateMonthly");

//toggle the type of donation
giveOnceBtn.addEventListener("click", function () {
  giveOnceBtn.classList.add("active");
  donateMonthlyBtn.classList.remove("active");
});

donateMonthlyBtn.addEventListener("click", function () {
  donateMonthlyBtn.classList.add("active");
  giveOnceBtn.classList.remove("active");
});
