const navElements = document.querySelector(".hamburgerButton");
const navE = document.querySelector("#navE");

navElements.addEventListener("click", mostrarElementos);

function mostrarElementos(){
    navE.classList.toggle("isactive");
    
}

const label = document.getElementById("labelCerrar");
const modal = document.querySelector(".modal");




label.addEventListener("click", cerrarModal);

function mostrarModal(){
    modal.classList.toggle("modal-Active");
}

function cerrarModal(){
    modal.classList.remove("modal-Active");
}