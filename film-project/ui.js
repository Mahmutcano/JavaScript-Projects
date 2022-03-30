function UI(){

}

UI.prototype.addFilmToUI = function(newFilm){
//     <!-- <tr>
//     <th scope="row">1</th>
//     <td>Mark</td>
//     <td>@mdo</td>
//   </tr> -->

const filmList = document.getElementById("films");
filmList.innerHTML += `<tr>
                        <td style="width: 40%;"><img src="${newFilm.link}" alt="poster" class="img-fluid" style: "width:50%;"></td>
                        <td>${newFilm.title}</td>
                        <td><button class="btn btn-outline-danger" type="button" id="add-btn">Sil</button></td>
                        </tr>`

}

UI.prototype.clearInput = function (el1, el2) {
    el1.value = '';
    el2.value = '';
}

UI.prototype.displayMessages = function (message, type){
    const section = document.getElementById('section');
    const div = document.createElement('div');

    div.className = `alert alert-${type} text-center`;
    div.textContent = message;
    section.appendChild(div);

    setTimeout(function (){
        div.remove();
    },3000);
}

UI.prototype.loadAllFilms = function (films){
    const filmList = document.getElementById("films");

    films.forEach(function (film){

        filmList.innerHTML += `<tr>
        <td style="width: 40%;"><img src="${film.link}" alt="poster" class="img-fluid" style: "width:50%;"></td>
        <td>${film.title}</td>
        <td><button class="btn btn-outline-danger" type="button" id="delete-btn">Sil</button></td>
        </tr>`
    });
}

UI.prototype.deleteFilmFromUI = function (element){
    element.parentElement.parentElement.remove();
}

UI.prototype.allFilmClearFromUi = function (){
    const filmList = document.getElementById("films");

    filmList.innerHTML = "";
}