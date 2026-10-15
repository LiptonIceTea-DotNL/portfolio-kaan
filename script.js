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

//Making an object to compare points later
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

formButton.addEventListener('click', function(event){
    event.preventDefault();
    for(const [continent, radio] of Object.entries(continentRadios)){
    continentPoints[continent] = Number(radio.checked);
    };
    for(const [city, checkbox] of Object.entries(cityCheckboxes)){
        cityPoints[city] = Number(checkbox.checked);
    };

    //Making an object to redirect the user to certain urls
    const redirects = [
    [continentPoints.europe, cityPoints.rome, '/redirections/europe.html'],
    [continentPoints.africa, cityPoints.cairo, '/redirections/africa.html'],
    [continentPoints.asia, cityPoints.tokyo, '/redirections/asia.html'],
    [continentPoints.oceania, cityPoints.sydney, '/redirections/oceania.html'],
    [continentPoints.northAmerica, cityPoints.york, '/redirections/north_america.html'],
    [continentPoints.southAmerica, cityPoints.rio, '/redirections/south_america.html'],
    [continentPoints.antarctica, null, '/redirections/antarctica.html']
];

        //Checking for 2 of the same answers
        for (const [continent, city, url] of redirects) {
        if (continent === 1 && (city === null || city === 1)){
            window.location.href  = url;
            break;
        };
    };
}); 


