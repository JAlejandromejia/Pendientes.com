const inputPendiente = document.getElementById("inputPendiente");
const buttonAdd = document.getElementById("buttonAdd")
const listaPend = document.getElementById("listaPend")

function agregarAList(){
    const texto = inputPendiente.value.trim();

    if (texto !== "") {
        const nuevoPend = document.createElement("li");
        nuevoPend.innerText = texto;
        listaPend.appendChild(nuevoPend);
        inputPendiente.value = "";
        mandarALocalStorage();
    }
}

buttonAdd.addEventListener("click", agregarAList);

function mandarALocalStorage() {
    const pendientes = [];
    for (let i = 0; i < listaPend.children.length; i++) {
        pendientes.push(listaPend.children[i].innerText);
    }
    localStorage.setItem("pendientes", JSON.stringify(pendientes));
}

function cargarPendientes() {
    const pendientes = JSON.parse(localStorage.getItem("pendientes")) || [];
    pendientes.forEach(texto => {
        const pendiente = document.createElement("li");
        pendiente.innerText = texto;
        listaPend.appendChild(pendiente)
    });
}

cargarPendientes();