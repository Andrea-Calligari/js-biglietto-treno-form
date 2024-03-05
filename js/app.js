const buttonGeneraDOMElement = document.getElementById('btn-genera');

const nameDOmElement = document.getElementById('names');
const inputKmDOMElement = document.getElementById('km');
const selectEtaDOMElement = document.getElementById('select');




// console.log( buttonGeneraDOMElement);

buttonGeneraDOMElement.addEventListener('click', function () {
    console.log('click')

    const fname = nameDOmElement.value;//string
    const km = parseFloat(inputKmDOMElement.value); // float
    const yearChoise = selectEtaDOMElement.value;// string

    console.log(fname, km, yearChoise);

    if (isNaN(km) || km < 0 || yearChoise === '' ) { // Dati errati

        alert('i dati non sono validi')

    } else { // Dati corretti

        const ticketPrice = km * 0.21;//float

        //Sconti 20%-40% 
        const varPriceUnder = ticketPrice * 0.2; //* 20 / 100 - float
        const varPriceOver = ticketPrice * 0.4; //* 40 / 100 -float


        //Prezzi scontati 20%-40%
        const totalPriceOver = ticketPrice - varPriceOver;//float
        const totalPriceUnder = ticketPrice - varPriceUnder;//float


        if (yearChoise === 'minorenne') { //IF 20% sconto per minorenni
            console.log('Il prezzo del biglietto è di €: ', ticketPrice.toFixed(2));
            console.log('Lo sconto applicato è di €: ', varPriceUnder.toFixed(2));
            console.log('Il prezzo scontato del biglietto è di €:', totalPriceUnder.toFixed(2));

        } else if (yearChoise === 'over') { //IF ELSE 40% sconto over 65
            console.log('Il prezzo del biglietto è di €: ', ticketPrice.toFixed(2));
            console.log('Lo sconto applicato è di  €: ', varPriceOver.toFixed(2));
            console.log('Il prezzo scontato del biglietto è di €: ', totalPriceOver.toFixed(2));
        }
        else { // ELSE tutto il resto
            console.log('Il prezzo del biglietto è di €: ', ticketPrice.toFixed(2));
        }
    }

});















// const km = parseInt(prompt('Inserire i'));//string
// const years = parseInt(prompt('Inserire la propria età'));//string


// console.log( 'Viaggio km', km);
// console.log('Età', years);

// Prezzo biglietto 
