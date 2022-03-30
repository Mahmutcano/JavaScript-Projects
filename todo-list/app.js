const formTodo = document.querySelector("#formTodo");
const inputValue = document.getElementById("inputVal");
const add = document.getElementById("add");
const allClear = document.getElementById("allClear");
const listGroup = document.getElementById("list-group");
const footer = document.getElementById("footer");



// Event İşlemi Burda
eventListeners();

function eventListeners() {
    add.addEventListener("click" , addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodo);
    listGroup.addEventListener("click", deleteItemUI);
    allClear.addEventListener("click" , todoClearAll);
}

function todoClearAll(e){
    listGroup.innerHTML = "";

    localStorage.removeItem("todo");
}

function deleteItemUI(e) {
     if (e.target.className === "fa-solid fa-calendar-xmark") {
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStore(e.target.parentElement.parentElement.textContent);
        showAlert("success", "Silindi");
    }
}

function deleteTodoFromStore(delettodo) {
    let todos = todoFromStorage();

    todos.forEach(function(todo, index) {
        if (todo === delettodo) {
            todos.splice(index, 1);
        }
    });

    localStorage.setItem("todo", JSON.stringify(todos));
}
function loadAllTodo() {
    let todos = todoFromStorage();

    todos.forEach(function(todo){
        addTodoUI(todo);
    })
}
// İnput Değeri Alma ve Ekleme
function addTodo(e) {
    const newTodo = inputValue.value.trim();

    if(newTodo === "") {
        // <div class="alert alert-danger" role="alert">
        // A simple danger alert—check it out!
        // </div>
        showAlert("danger" , "Alan boş bırakılamaz");
    }
    else {
        addTodoUI(newTodo);
        addTodoStorage(newTodo);
        showAlert("success" , "Eklendi");
    }


    e.preventDefault();
}

function todoFromStorage() {
    let todos;

    if (localStorage.getItem('todo') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todo'));
    }
    return todos;
}

function addTodoStorage(newTodo) {
    let todos = todoFromStorage();
    
    todos.push(newTodo);

    localStorage.setItem(('todo'), JSON.stringify(todos));
}

// Alert Ekleme
function showAlert(type, message) {
    const alert = document.createElement("div");

    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    footer.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    },2000);
}
// Yeni Li oluşturma alınan değeri Linin içine ekleme yani UI işlemleri yaptık
function addTodoUI(newTodo) {

    // <!-- <li class="list-group-item d-flex justify-content-between align-items-center" id="listVal">
    // ${keyVal}
    // <span>
    //     <a href="#" class="delete_item"
    //     <i class="fa-solid fa-calendar-xmark" id="clear"></i>
    //     </a>
    // </span>
    // </li> -->

    const liList = document.createElement('li');
    liList.className = "list-group-item d-flex justify-content-between align-items-center";
    const alink = document.createElement('a');
    alink.href = "#";
    alink.className = "delete_item";
    alink.innerHTML = "<i class='fa-solid fa-calendar-xmark' id='clear'></i>"
    // Yazıyı Li arasına koyma
    liList.appendChild(document.createTextNode(newTodo));
    // linin içine linki ekleme
    liList.appendChild(alink);
    // Listleri Sıralama işlemi(ul => li)
    listGroup.appendChild(liList);
    // İnput Yazdıktan Sonra Temzilenir
    inputValue.value = "";
}



