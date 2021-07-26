let curFrom = document.querySelector(".cur-from");
let curTo = document.querySelector(".cur-to");
let convRateInput = document.querySelector(".conv-rate-input");
let convRateOutput = document.querySelector(".conv-rate-output");
let convButton = document.querySelector(".convert-button");
let swapButton = document.querySelector(".swap-button");
// let currencyDivs = document.querySelector(".currency-divs");
let curFromDiv = document.querySelector(".currency-from-div");
let curToDiv = document.querySelector(".currency-to-div");
let from = "", to = "";

// Not exactly when or how to use this function yet...

// async function getConversionRate() {
//   from = curFrom.value;
//   to = curTo.value;
//   let quantity = Number(convRateInput.value);
//   let baseUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`;
//   let response = await fetch(baseUrl);
//   let dataJson = await response.json();
//   let resultingRate = dataJson[to] * quantity;
  
//   return resultingRate;
// }

curFrom.addEventListener("input", () => {
  console.log(curFrom.value);
})

curTo.addEventListener("input", () => {
  console.log(curTo.value);
})

// convRateInput.addEventListener("change", () => {
//     if (convRateInput.value < 0) {
//       convRateOutput.value = 0;
//     }
// })

convButton.addEventListener("click", async () => {
  from = curFrom.value;
  to = curTo.value;  
  let quantity = Number(convRateInput.value);
  let baseUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`; 
  let response = await fetch(baseUrl);
  let dataJson = await response.json();
  let resultingRate = dataJson[to] * quantity;
  
  if (convRateInput.value > 0) {
    convRateOutput.value = resultingRate.toFixed(2);
  } else {
    convRateOutput.value = 0;
  }
})
 
/* for use with testing "currency swap" feature

swapButton.addEventListener("click", () => {
    /*
    for (let i = 0; i < curFrom.options.length; i++) {
        if (curFrom.options[i].selected) {
            console.log(curFrom.options[i].text);
        }
    }
    */
  //  let temp = "";
/*
    for (let i = 0; i < curFrom.options.length; i++) {
        /*
        if (curFrom.options[i].selected) {
            console.log(curFrom.options[i].text);
      //      curTo.options[i].text = curFrom.options[i].text
        }

    }
    

    for (let j = 0; j < curTo.options.length; j++) {
        if (curTo.options[j].selected) {
            console.log(curTo.options[j].text);
        }
    }
    */
    /*
 currencyDivs.style.flexDirection = "row-reverse";
    for (let i = 0; i < curFrom.options.length; i++) {
      if (curFrom.options[i].selected) {
          for (let j = 0; j < curTo.options.length; j++) {
              if (curTo.options[j].selected) {
                  console.log(curFrom.options[i].text);
                  console.log(curTo.options[j].text);
                  currencyDivs.style.flexDirection = "row-reverse";
                  if (currencyDivs.style.flexDirection === "row-reverse") {
                    currencyDivs.style.flexDirection = "row";
                  }
              }
          }       
      }
  }
    */
  //  if (curFromDiv.style.order === "1" && curToDiv.style.order === "2") {
  //   curFromDiv.style.order = "2";
  //   curToDiv.style.order = "1";
    /*
    from = curTo.value;
    to = curFrom.value;
    */
  //   convRateInput.value = 0;
  //   convRateOutput.value = 0;
  //  } else {
  //   curFromDiv.style.order = "1";
  //   curToDiv.style.order = "2";
    /*
    from = curFrom.value;
    to = curTo.value;
    */
  //  }
   
    
// })
