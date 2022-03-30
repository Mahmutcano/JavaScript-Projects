const minus = document.getElementById("minus-btn");
const count = document.getElementById("count");
const plus = document.getElementById("plus-btn");
const refresh = document.getElementById("refresh");



let total = 0;
count.innerHTML = total;

plus.addEventListener("click", () =>{
    total += 1;
    count.innerHTML = total;
})

minus.addEventListener("click", () =>{
    total -= 1;
    count.innerHTML = total;
})

refresh.addEventListener("click", () =>{
    total = 0;
    count.innerHTML = total;
})