/*
Formulier project stappen:
1. grab button and put in js variable
2. assign values to each radio and checkbox
3. tally up total points and store that in variables
4. redirect user to different continent website depending on points
*/


//Putting HTML elements into variables
const formButton = document.querySelector('.submit-button');
const europeRadio = document.querySelector('.europe');
const africaRadio = document.querySelector('.africa');
const asiaRadio = document.querySelector('.asia');
const oceaniaRadio = document.querySelector('.oceania');
const northAmericaRadio = document.querySelector('.north-america');
const southAmericaRadio = document.querySelector('.south-america');
const antarcticaRadio = document.querySelector('.antarctica');
const rioCheckbox = document.querySelector('.rio');
const tokyoCheckbox = document.querySelector('.tokyo');
const yorkCheckbox = document.querySelector('.york');
const romeCheckbox = document.querySelector('.rome');
const sydneyCheckbox = document.querySelector('.sydney');
const cairoCheckbox = document.querySelector('.cairo');


//Prevents button reloading page
formButton.addEventListener('click', function(event){
    event.preventDefault();
});

//Making an object to add points to later for each continent
const continentRadios = {
    europe: europeRadio,
    africa: africaRadio,
    asia: asiaRadio,
    oceania: oceaniaRadio,
    northAmerica: northAmericaRadio,
    southAmerica: southAmericaRadio,
    antarctica: antarcticaRadio,
};

//Same thing here
const cityCheckboxes = {
    rio: rioCheckbox,
    tokyo: tokyoCheckbox,
    york: yorkCheckbox,
    rome: romeCheckbox,
    sydney: sydneyCheckbox,
    cairo: cairoCheckbox,
};

//Storing points here
const cityPoints = {};

//Storing points here
const continentPoints = {};

//For every continent and radio button inside of my object's keys and values,
//the value of every continent will be either 0/1 depending on if the radio is checked.
//Also converting a boolean to a number to add later


formButton.addEventListener('click', function(){

    for(const [continent, radio] of Object.entries(continentRadios)){
    continentPoints[continent] = Number(radio.checked);
    };
    for(const [city, checkbox] of Object.entries(cityCheckboxes)){
        cityPoints[city] = Number(checkbox.checked);
    };

    switch (continentPoints.europe, cityPoints.rome){
        case 1 && 1:
             window.location.href = '/redirections/europe.html';
        break;
    };

    switch (continentPoints.africa, cityPoints.cairo){
        case 1 && 1:
            window.location.href = '/redirections/africa.html';
    };

    switch (continentPoints.asia, cityPoints.tokyo){
        case 1 && 1:
            window.location.href = '/redirections/asia.html';
    };

    switch (continentPoints.oceania, cityPoints.sydney){
        case 1 && 1:
            window.location.href = '/redirections/oceania.html';
    };

    switch (continentPoints.northAmerica, cityPoints.york){
        case 1 && 1:
            window.location.href = '/redirections/north_america.html';
    };

    switch (continentPoints.southAmerica, cityPoints.rio){
        case 1 && 1:
            window.location.href = '/redirections/south_america.html';
    };

    switch (continentPoints.antarctica){
        case 1:
            window.location.href = '/redirections/antarctica.html';
    };

    
    console.log(continentPoints.europe);
    console.log(cityPoints.rome);
}); 


