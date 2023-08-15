const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const btn = document.querySelector(".count");
const error = document.querySelector(".error");
const costInfo = document.querySelector(".cost-info");
const cost = document.querySelector(".cost");

checkInput = () => {
  if (price.value === "" || people.value === "" || tip.value == 0) {
    error.textContent = "uzupełnij wszystkie pola!";
  } else {
    error.textContent = "";
    countBill();
  }
};

countBill = () => {
  const newPrice = parseFloat(price.value);
  const newPeople = parseInt(people.value);
  const newTip = parseFloat(tip.value);
  const sum = newPrice + (newPrice * newTip) / newPeople;
  costInfo.style.display = "block";
  cost.textContent = sum.toFixed(2);
};

btn.addEventListener("click", checkInput);
