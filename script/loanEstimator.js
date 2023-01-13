
const estimator = document.querySelector(".loanEstimator");

const carPrice = localStorage.getItem("loanAmount");

const priceValue = document.querySelector("#price");
const DownValue = document.querySelector("#downPayment");
const tradeValue = document.querySelector("#tradeValue");
let estimatedTax = document.querySelector("#taxValue");
estimatedTax.value = 6;

if (carPrice > 0) {
    priceValue.value = carPrice;
    console.log(carPrice);
}
else {
    priceValue.value = 0;
    console.log(carPrice);
}

function formSubmit() {
   
    // console.log(priceValue.value);
    // console.log(DownValue.value);
    // console.log(tradeValue.value);

    //dispalying info
    const price = document.querySelector("#priceResult");
    const downPayment = document.querySelector("#downResult");
    const trade = document.querySelector("#tradeResult");
    const taxValue = document.querySelector("#taxValue").value;
    document.querySelector("#tax").textContent = taxValue;
    price.textContent = priceValue.value;
    downPayment.textContent = DownValue.value;
    trade.textContent = tradeValue.value;

    //handling sales tax
    const taxToAdd = (taxValue/100) * priceValue.value;
    const taxDisplayed = document.querySelector("#taxResult");
    taxDisplayed.textContent = taxToAdd.toFixed(2);

    //handling total interest paid
    const rate = document.querySelector("#rate");
    let interestRate = 0;
    
    const loanPeriod = document.querySelector("#termOptions").value;
    console.log(loanPeriod);
    //const interestToAdd = priceValue.value * (interestRate/100) * (loanPeriod/12);
    const displayedInterest = document.querySelector("#interestResult");
    //displayedInterest.textContent = interestToAdd;
    const creditScore = document.querySelector("#ccOptions").value;
    console.log(creditScore);
    if (creditScore == "Excellent (750-850)") {
        interestRate = 7;
        rate.textContent = interestRate;
    }
    else if (creditScore == "Good (650-750)") {
        interestRate = 8.5;
        rate.textContent = interestRate;
    }
    else if (creditScore == "Average (550-650)") {
        interestRate = 14.5;
        rate.textContent = interestRate;
    }
    else if (creditScore == "Below Average (450-550)") {
        interestRate = 19.5;
        rate.textContent = interestRate;
    }
    let totalInterest = 0;
    let totalValue = priceValue.value - DownValue.value - tradeValue.value + taxToAdd;
    for (let i=0; i < loanPeriod; i++) {
        const interest = (totalValue * (interestRate/100))/12;
        const monthlyPayment = totalValue/loanPeriod;
        const trueMp = monthlyPayment + interest;
        totalInterest += interest;

        totalValue -= trueMp;
        console.log(totalValue);
        console.log(interest);
    
    }

    displayedInterest.textContent = totalInterest.toFixed(2);

    //handling total
    const grandTotal = priceValue.value - DownValue.value - tradeValue.value + totalInterest + taxToAdd;
    const totalDisplayed = document.querySelector("#totalResult");
    totalDisplayed.textContent = grandTotal.toFixed(2);

    //handling monthly payment
    const monthP = document.querySelector("#mp");
    monthP.textContent = (grandTotal/loanPeriod).toFixed(2);


}

//estimator.setAttribute("onsubmit", formSubmit());

const submit = document.querySelector(".submit");

submit.addEventListener("click", formSubmit);

const hamButton = document.querySelector(".ham");
const navi = document.querySelector(".links")

hamButton.addEventListener("click", ()=>{
  navi.classList.toggle("responsive")
},
false);
