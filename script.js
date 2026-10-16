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

//Making an array to compare points later
const allValues = [
    [europeRadio, romeCheckbox, '/redirections/europe.html'],
    [africaRadio, cairoCheckbox, '/redirections/africa.html'],
    [asiaRadio, tokyoCheckbox, '/redirections/asia.html'],
    [oceaniaRadio, sydneyCheckbox, '/redirections/oceania.html'],
    [northAmericaRadio, yorkCheckbox, '/redirections/north_america.html'],
    [southAmericaRadio, rioCheckbox, '/redirections/south_america.html'],
    [antarcticaRadio, null, '/redirections/antarctica.html']
];

//Same thing here


//For every continent and radio button inside of my array I want to send the user to a different url
//the value of every continent will be either true/false depending on if the radio is checked


formButton.addEventListener('click', function (event) {
    event.preventDefault();

    let selectedContinent = false;

    for (const [continent, city, url] of allValues) {
        if (continent.checked) {
            selectedContinent = true;

            if (city === null || city.checked) {
                window.location.href = url;
            } else {
                window.location.href = '/redirections/advice.html';
            }
            break;
        };
    };
    if (!selectedContinent) {
        window.location.href = '/redirections/none.html';
    }
});


