const card = document.getElementById("card");
const filmName = document.getElementById("film-input");
const linkİnput = document.getElementById("link-input");
const addBtn = document.getElementById("add-btn");
const deleteBtn = document.getElementById("delete-btn");
const table = document.querySelector("table");
const allClear = document.getElementById("allDelete");

const ui = new UI();
const storage = new Storage();

eventListeners();

function eventListeners() {
    addBtn.addEventListener("click", addFilm);
    document.addEventListener("DOMContentLoaded", function(){
        let films = storage.addFilmFromStorage();
        ui.loadAllFilms(films);
    });

    table.addEventListener("click", clearBtn);
    allClear.addEventListener("click", allFilmClear);
}

function addFilm(e) {
    const link = linkİnput.value;
    const title = filmName.value;


    if (link === "" || title === "") {
        // Hata
        ui.displayMessages("Boş Alan Bırakılmaz","danger"); // Alert
    } 
    else 
    {
        const newFilm = new Film(title,link);

        ui.addFilmToUI(newFilm); // ui.js
        storage.addFilmToStorage(newFilm);// Storage.js
        ui.displayMessages("Eklendi", "success");
    }

    ui.clearInput(filmName,linkİnput); // Clear Input

    e.preventDefault();
}

function clearBtn(e) {
    if(e.target.id === "delete-btn"){
        ui.deleteFilmFromUI(e.target);
        storage.removeFilmFromStorage(e.target.parentElement.previousElementSibling.textContent);
        ui.displayMessages("Silindi" , "success");
    }
}

function allFilmClear(){
    if (confirm("Hepsi Silinsin mi?")) {
        ui.allFilmClearFromUi();
        storage.allFilmClearFromStorage();
    }
}