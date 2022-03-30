function Storage() {

}

Storage.prototype.addFilmToStorage = function (newFilm) {
    let films = this.addFilmFromStorage();
    films.push(newFilm);
    localStorage.setItem('films', JSON.stringify(films));
}

Storage.prototype.addFilmFromStorage = function (){
    let films;

    if (localStorage.getItem('films') === null) {
        films = [];
    }
    else {
        films = JSON.parse(localStorage.getItem('films'));
    }
    return films;
}

Storage.prototype.removeFilmFromStorage = function (filmTitle) {
    let films = this.addFilmFromStorage();

    films.forEach(function (film, index) {
        if(film.title === filmTitle) {
            films.splice(index, 1);
        }
    });

    localStorage.setItem("films", JSON.stringify(films));
}

Storage.prototype.allFilmClearFromStorage = function () {
    localStorage.removeItem('films');
}