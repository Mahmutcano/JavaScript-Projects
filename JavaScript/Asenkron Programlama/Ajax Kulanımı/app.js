// Http Status Code
// 200 : OK
// 403 : Forbidden
// 404 : Not Found
// 505 : Internal Server Error



document.getElementById("ajax").addEventListener("click" , getAllEmployes)

function getAllEmployes(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "employes.json", true);

    xhr.onload = function(){

        let list = document.getElementById("employees");



        if (xhr.status == 200){
            const employees = JSON.parse(this.responseText);
            
            employees.forEach(function(employee){
                list.innerHTML += `
                    <tr>
                      <td>${employee.name}</td>
                      <td>${employee.sex}</td>
                    </tr>
                
                
                `
            });
        }
    }

    xhr.send();
}