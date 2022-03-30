let intVal = document.getElementById("input");
let fahİntVal = document.getElementById("result");

// console.log(intVal);

function celToFar() {
    let output = (parseFloat(intVal.value) * 9/5 ) + 32;
    fahİntVal.value = parseFloat(output.toFixed(2));
    // console.log(output);
}

function fahCelToFar() {
let fahİntVal = document.getElementById("result");
    let output = (parseFloat(fahİntVal.value) - 32 ) * 5/9;
    intVal.value = parseFloat(output.toFixed(2));
}

// console.log(celToFar());