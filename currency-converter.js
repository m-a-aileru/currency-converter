let curFrom = document.querySelector(".cur-from");
let curTo = document.querySelector(".cur-to");
let convRateInput = document.querySelector(".conv-rate-input");
let convRateOutput = document.querySelector(".conv-rate-output");
let convButton = document.querySelector(".convert-button");

curFrom.addEventListener("input", () => {
  console.log(curFrom.value);
  //convRateOutput.textContent = curFrom.value;
})

curTo.addEventListener("input", () => {
  console.log(curTo.value);
  //convRateOutput.textContent = curTo.value;
})

convRateInput.addEventListener("input", () => {
  console.log(convRateInput.value);
  //convRateOutput.textContent = convRateInput.value;
})

convButton.addEventListener("click", async () => {
  let from = curFrom.value.toLowerCase();
  let to = curTo.value.toLowerCase();
  let quantity = Number(convRateInput.value);
  
  let baseUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`;
  let response = await fetch(baseUrl);
  let dataJson = await response.json();
  
  convRateOutput.textContent = dataJson[to] * quantity;
})
