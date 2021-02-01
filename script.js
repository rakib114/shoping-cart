/**
 //Case-increase
document.getElementById("case-plus").addEventListener("click", function () {
  const caseInput = document.getElementById("case-count");
  const caseCount = parseInt(caseInput.value);
  const caseNewCount = caseCount + 1;
  caseInput.value = caseNewCount;
  const caseTotalPrice = caseNewCount * 59;
  document.getElementById("case-price").innerText = "$" + caseTotalPrice;
});
//Case-descrease 
document.getElementById("case-minus").addEventListener("click", function () {
  const caseInput = document.getElementById("case-count");
  const caseCount = parseInt(caseInput.value);
  const caseNewCount = caseCount - 1;
  caseInput.value = caseNewCount;
  const caseTotalPrice = caseNewCount * 59;
  document.getElementById("case-price").innerText = "$" + caseTotalPrice;
});
*/
/** 
//Another Way^
document.getElementById("case-plus").addEventListener("click", function () {
  handleProductChange(true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  handleProductChange(false);
});
function handleProductChange(isIncrease) {
  const caseInput = document.getElementById("case-count");
  const caseCount = parseInt(caseInput.value);
  let caseNewCount = caseCount;
  if (isIncrease == true) {
    caseNewCount = caseCount + 1;
  }
  if (isIncrease == false && caseCount > 0) {
    caseNewCount = caseCount - 1;
  }
  caseInput.value = caseNewCount;
  const caseTotalPrice = caseNewCount * 59;
  document.getElementById("case-price").innerText = "$" + caseTotalPrice;
}
*/
/** 
//Phone increase
document.getElementById("Phone-plus").addEventListener("click", function () {
  const phoneInput = document.getElementById("Phone-count");
  const phoneCount = parseInt(phoneInput.value);
  const phoneNewCount = phoneCount + 1;
  phoneInput.value = phoneNewCount;
  const phoneTotatPrice = phoneNewCount * 1219;
  document.getElementById("Phone-price").innerText = "$" + phoneTotatPrice;
});
//Phone-Decrease
document.getElementById("phone-minus").addEventListener("click", function () {
  const phoneInput = document.getElementById("Phone-count");
  const phoneCount = parseInt(phoneInput.value);
  const phoneNewCount = phoneCount - 1;
  phoneInput.value = phoneNewCount;
  const phoneTotatPrice = phoneNewCount * 1219;
  document.getElementById("Phone-price").innerText = "$" + phoneTotatPrice;
});
*/
/**
//Another Way^
function handlePhoneChange(isIncrease) {
  const phoneInput = document.getElementById("Phone-count");
  const phoneCount = parseInt(phoneInput.value);
  let phoneNewCount = phoneCount;
  if (isIncrease == true) {
    phoneNewCount = phoneCount + 1;
  }
  if (isIncrease == false && phoneCount > 0) {
    phoneNewCount = phoneCount - 1;
  }
  phoneInput.value = phoneNewCount;
  const phoneTotatPrice = phoneNewCount * 1219;
  document.getElementById("Phone-price").innerText = "$" + phoneTotatPrice;
}
*/
//Tripical || Hard way ^
document.getElementById("case-plus").addEventListener("click", function () {
  handleProductChange("case", true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  handleProductChange("case", false);
});
function handleProductChange(product, isIncrease) {
  const productInput = document.getElementById(product + "-count");
  const productCount = parseInt(productInput.value);
  let productNewCount = productCount;
  if (isIncrease == true) {
    productNewCount = productCount + 1;
  }
  if (isIncrease == false && productCount > 0) {
    productNewCount = productCount - 1;
  }
  productInput.value = productNewCount;
  // const productTotalPrice = productNewCount * 59;
  let productTotalPrice = 0;
  if (product == "Phone") {
    productTotalPrice = productNewCount * 1219;
  }
  if (product == "case") {
    productTotalPrice = productNewCount * 59;
  }
  document.getElementById(product + "-price").innerText =
    "$" + productTotalPrice;
  calculateTotal();
}
//Calculat Total Price
function calculateTotal() {
  const phoneCount = getInput("Phone");
  const caseCount = getInput("case");
  const totalPrice = phoneCount * 1219 + caseCount * 59;
  document.getElementById("total-price").innerText = "$" + totalPrice;
  const tax = Math.round(totalPrice * 0.1);
  document.getElementById("tax-amount").innerText = "$" + tax;
  const finalPrice = totalPrice + tax;
  document.getElementById("final-price").innerText = "$" + finalPrice;
}

function getInput(product) {
  const productInput = document.getElementById(product + "-count");
  const productCount = parseInt(productInput.value);
  return productCount;
}
