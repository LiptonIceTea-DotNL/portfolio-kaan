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

//Prevents button reloading page
formButton.addEventListener('click', function(event){
    event.preventDefault();
});

formButton.addEventListener('click', function(){
let europePoints = 0;
let asiaPoints = 0;
let africaPoints = 0;
let southAmericaPoints = 0;
let northAmericaPoints = 0;
let oceaniaPoints = 0;
let antarcticaPoints = 0;
});


//Try to slop code the page redirect first, then use arrays and object to simplify

/*
europeRadio.addEventListener('change', function(){
    const europeValue = europeRadio.checked;
    console.log(europeValue);
});

africaRadio.addEventListener('change', function(){
    const africaValue = africaRadio.checked;
    console.log(africaValue);
});

asiaRadio.addEventListener('change', function(){
    const asiaValue = asiaRadio.checked;
    console.log(asiaValue);
});

oceaniaRadio.addEventListener('change', function(){
    const oceaniaValue = oceaniaRadio.checked;
    console.log(oceaniaValue);
});

northAmericaRadio.addEventListener('change', function(){
    const northAmericaValue = northAmericaRadio.checked;
    console.log(northAmericaValue);
});

southAmericaRadio.addEventListener('change', function(){
    const southAmericaValue = southAmericaRadio.checked;
    console.log(southAmericaValue);
});

antarcticaRadio.addEventListener('change', function(){
    const antarcticaValue = antarcticaRadio.checked;
    console.log(antarcticaValue);
});
*/