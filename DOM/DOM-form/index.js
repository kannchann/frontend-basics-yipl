// Donation type selection
const giveOnceBtn = document.getElementById("giveOnce");
const donateMonthlyBtn = document.getElementById("donateMonthly");
//radiobutton for donating person type
const donateAs = document.getElementById("donateAsOptions");
//radiobutton for paymenMethod
const paymentMethod = document.getElementById("paymentMethodOptions");
//amount
const amountContainer = document.getElementById("amountOptions");
//custom amount input
const customAmountInput = document.getElementById("customAmount");
//additional remark input
const additionalRemarksInput = document.getElementById("additionalRemarks");
//submit button
const donateButton = document.getElementById("donateButton");

//toggle the type of donation
giveOnceBtn.addEventListener("click", function () {
  giveOnceBtn.classList.add("active");
  donateMonthlyBtn.classList.remove("active");
});

donateMonthlyBtn.addEventListener("click", function () {
  donateMonthlyBtn.classList.add("active");
  giveOnceBtn.classList.remove("active");
});

//adding radio buttons for donating kind of person
const donateAsOptions = [
  { id: "individual", label: "Individual" },
  { id: "company", label: "Company/Organisation" },
  { id: "proxy", label: "Proxy (on behalf of)" },
  { id: "anonymous", label: "Anonymous (non-tax deductible)" },
];

donateAsOptions.forEach((option) => {
  const div = document.createElement("div");
  div.innerHTML = `<input type="radio" id= "${option.id}" name="donateAs" value = "${option.label}" autocomplete="off">
  <label for="${option.id}">${option.label}</label> `;
  donateAs.appendChild(div);
});

//adding radio buttons for payment type
const paymentMethods = [
  { id: "creditDebitCard", label: "Credit/ Debit card" },
  { id: "payNow", label: "PayNow" },
  { id: "onlineBankTransfer", label: "Online Bank Transfer" },
  { id: "cheque", label: "Cheque" },
];

paymentMethods.forEach((method) => {
  const div = document.createElement("div");
  div.innerHTML = `<input type="radio" id= "${method.id}" name="paymentMethod" value = "${method.label}">
    <label for="${method.id}">${method.label}</label> `;
  paymentMethod.appendChild(div);
});

const amountOptions = [20, 70, 100, 200, 1000, 2000];
amountOptions.forEach((amount) => {
  const button = document.createElement("button");
  button.classList.add("amount-btn");
  button.textContent = `S$${amount}`;
  button.addEventListener("click", function () {
    document
      .querySelectorAll(".amount-btn")
      .forEach((btn) => btn.classList.remove("selected"));
    this.classList.add("selected");
    document.getElementById("customAmount").value = amount;
  });
  amountContainer.appendChild(button);
});

// Handle form submission
donateButton.addEventListener("click", () => {
  const selectedDonateAs = document.querySelector(
    'input[name="donateAs"]:checked'
  )?.value;
  const selectedAmount =
    document.querySelector('input[name="amount"]:checked')?.value ||
    document.getElementById("customAmount").value;
  const selectedPaymentMethod = document.querySelector(
    'input[name="paymentMethod"]:checked'
  )?.value;
  const additionalRemarks = document.getElementById("additionalRemarks").value;
  if (
    !selectedDonateAs ||
    !selectedAmount ||
    !selectedPaymentMethod ||
    additionalRemarks === undefined
  ) {
    alert("Please fill in all required fields.");
  } else {
    // Log the selected values for demonstration purposes
    console.log("Donation Details:", {
      selectedDonateAs,
      selectedAmount,
      selectedPaymentMethod,
      additionalRemarks,
    });
    alert("Donation processed!");
    // Reset the form after submission
    document
      .querySelectorAll('input[name="donateAs"]')
      .forEach((radio) => (radio.checked = false));
    document
      .querySelectorAll('input[name="paymentMethod"]')
      .forEach((radio) => (radio.checked = false));
    document
      .querySelectorAll(".amount-btn")
      .forEach((btn) => btn.classList.remove("selected"));
    customAmountInput.value = "";
    additionalRemarksInput.value = "";
    giveOnceBtn.classList.remove("active");
    donateMonthlyBtn.classList.remove("active");
  }
});
