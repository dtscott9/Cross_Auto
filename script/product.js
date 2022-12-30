const productId = localStorage.getItem("productId");
console.log(productId);
const jsonVar = localStorage.getItem("product");
const json = `json/${jsonVar}.json`;

fetch(json)
    .then(function (response) {
        return response.json()
    })
    .then(function (jsonObject){
        const vehicles = jsonObject["vehicles"]
        displayProduct(vehicles);
    });

function displayProduct(vehicles) {

    vehicles.forEach(vehicle => {
        if (vehicle.id == productId){
            document.querySelector(".make").textContent = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;
            document.querySelector(".carImg").setAttribute('src', vehicle.image);
            document.querySelector(".price").textContent = vehicle.price;
            document.querySelector(".miles").textContent = `${vehicle.miles} mi`;
            const button = document.querySelector("#finance");
            let loan = document.querySelector(".price").textContent;
            let newLoan = loan.replace("$", "")
            let finalLoan = newLoan.replace(",", "");
            button.addEventListener("click", ()=> {
                localStorage.setItem("loanAmount", finalLoan);
                location.href = "../loanEstimator.html";
            });
        }
        
    });

}