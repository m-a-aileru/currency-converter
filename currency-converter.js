let curFrom = document.querySelector(".cur-from");
let curTo = document.querySelector(".cur-to");
let convRateInput = document.querySelector(".conv-rate-input");
let convRateOutput = document.querySelector(".conv-rate-output");
let convButton = document.querySelector(".convert-button");

async function getConversionRate() {
  let from = curFrom.value.toLowerCase();
  let to = curTo.value.toLowerCase();
  let quantity = Number(convRateInput.value);
  let baseUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`;
  
  let response = await fetch(baseUrl);
  let dataJson = await response.json();
  
  let resultingRate = dataJson[to] * quantity;
  
  return resultingRate;
}

curFrom.addEventListener("input", () => {
  console.log(curFrom.value);
})

curTo.addEventListener("input", () => {
  console.log(curTo.value);
})

/*
convRateInput.addEventListener("input", async () => {
  //convRateOutput.textContent = convert(curFrom.value, curTo.value, convRateInput.value);
  let from = curFrom.value.toLowerCase();
  let to = curTo.value.toLowerCase();
  let quantity = Number(convRateInput.value);
  let baseUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`;
  // might need to convert 'convRateInput' into a number
  
  let response = await fetch(baseUrl);
  let dataJson = await response.json();
  
  let resultingRate = dataJson[to] * quantity;
  
  convRateOutput.value = resultingRate.toFixed(2);
  //////////////////////////////////////////////
  convRateInput.addEventListener("change", () => {
    //console.log(convRateInput.value);
     convRateOutput.value = convRateInput.value;
})
})
*/




/*
convRateInput.addEventListener("change", async () => {
  //convRateOutput.textContent = convert(curFrom.value, curTo.value, convRateInput.value);
  let from = curFrom.value.toLowerCase();
  let to = curTo.value.toLowerCase();
  let quantity = Number(convRateInput.value);
  let baseUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`;
  
  let response = await fetch(baseUrl);
  let dataJson = await response.json();
  
  let resultingRate = dataJson[to] * quantity
  
//  convRateOutput.value = resultingRate.toFixed(2);
  console.log(resultingRate.toFixed(2));
  convRateInput.addEventListener("change", () => {
    //console.log(convRateInput.value);
     convRateOutput.value = convRateInput.value;
})
})
*/
// start to test something out here but haven't quite finished it yet
convRateInput.addEventListener("change", () => {
    //console.log(convRateInput.value);
     convRateOutput.value = convRateInput.value;
})

convButton.addEventListener("click", async () => {
  //convRateOutput.textContent = convert(curFrom.value, curTo.value, convRateInput.value);
  let from = curFrom.value.toLowerCase();
  let to = curTo.value.toLowerCase();
  let quantity = Number(convRateInput.value);
  let baseUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`;
  // might need to convert 'convRateInput' into a number
  
  let response = await fetch(baseUrl);
  let dataJson = await response.json();
  
  let resultingRate = dataJson[to] * quantity;
  
  convRateOutput.value = resultingRate.toFixed(2);
  //console.log(resultingRate.toFixed(2));
})


/*
convButton.addEventListener("click", () => {
  getConversionRate().then(response => response.json()).then(json => console.log(json));
})
*/
