const oneTitle = document.getElementById("oneTitle");
const oneSelect = document.getElementById("oneSelect");
const twoTitle = document.getElementById("twoTitle");
const twoSelect = document.getElementById("twoSelect");
const oneİnput = document.getElementById("oneİnput");
const twoİnput = document.getElementById("twoİnput");
const btn = document.getElementById("btn");
const currency = new Currency("USD","TRY");
const ui = new UI(oneSelect, twoSelect);


addEventListeners();


function addEventListeners(){
    oneİnput.addEventListener("input", changeExtance);
    oneSelect.onchange = function(){
        currency.changeFirstCureency(oneSelect.options[oneSelect.selectedIndex].textContent);
        ui.changeFirst();
    };

    twoSelect.onchange = function(){
        currency.changeSecondCureency(twoSelect.options[twoSelect.selectedIndex].textContent);
        ui.changeSecond();
    };
}

function changeExtance() {
    currency.changeAmount(oneİnput.value);
    currency.exchange()
    .then(result => {
        ui.displayResult(result);
    })
    .catch(err => console.log(err));
}

