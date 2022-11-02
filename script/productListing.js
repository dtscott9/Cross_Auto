"use strict";
const jsonVar = localStorage.getItem("type");
localStorage.setItem("product", jsonVar);
console.log(jsonVar);

const json = `json/${jsonVar}.json`;
//Fetching JSON data
fetch(json)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const vehicles = jsonObject["vehicles"];
    vehicles.forEach(displayVehicles);
  });

  function displayVehicles(vehicles) {
    //Creating html elements
    let displayCard = document.createElement('section');
    let image = document.createElement('img');
    let make_year = document.createElement('h1');
    let model = document.createElement('p');
    let price = document.createElement('h2');
    let miles = document.createElement('p');
    let cardBottom = document.createElement('div');
    let cardLink = document.createElement('a');
    image.setAttribute('src', vehicles.image)
    image.setAttribute('alt', vehicles.make + ' ' + vehicles.model)
    cardLink.setAttribute('href', "../product.html");
    make_year.textContent = vehicles.year + ' ' + vehicles.make;
    model.textContent = vehicles.model;
    miles.textContent = vehicles.miles + ' ' + 'mi';
    price.textContent = vehicles.price

    //Appending the elements
    cardBottom.appendChild(make_year);
    cardBottom.appendChild(model);
    cardBottom.appendChild(price);
    cardBottom.appendChild(miles);
    displayCard.appendChild(image);
    displayCard.appendChild(cardBottom);
    cardLink.appendChild(displayCard);

    document.querySelector(".productCard").appendChild(cardLink);
  }

