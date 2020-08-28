"use strict"

//!!!!!!!!!!NEED TO FIX FILTER BY ROAST DISPLAY
//                  & ADD ADD COFFEE FUNCTION AND CREATE COFFEE FUNCTION!!!!!!!!!

//  <==================================== VARIABLES ====================================>
var tbody = document.querySelector('#coffees');
var roastSelection = document.querySelector('#roast-selection');

//search function
var userSelection = document.querySelector('#userSearch');


//  <==================================== ADD COFFEE ====================================>


//  <==================================== RENDERING COFFEES ====================================>
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<div>' + coffee.name + '</div>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


//  <============================= FILTER COFFEES AND SEARCH INPUT =============================>
var updateCoffees= function() {
    // e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var userSelectedCoffee = userSelection.value;
    var filteredCoffees = [];

    coffees.forEach(function(coffee) {
        if ((coffee.roast === selectedRoast) || selectedRoast === 'All') {
            if (coffee.name.toLowerCase().includes(userSelectedCoffee.toLowerCase())){
                filteredCoffees.push(coffee);
            }
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
};


//  <==================================== CREATE NEW COFFEE ====================================>


//  <==================================== COFFEE TABLE ====================================>
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
tbody.innerHTML = renderCoffees(coffees);


//  <================================== COFFEE EVENT LISTENERS ==================================>
roastSelection.addEventListener('change', updateCoffees);
userSelection.addEventListener("keyup", function() {
    updateCoffees(userSelection.value);
});














