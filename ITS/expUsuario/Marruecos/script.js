const jugadores = document.querySelectorAll(".jugador");

const modal = document.querySelector(".modal");

const cerrar = document.querySelector(".cerrar");

const nombre = document.querySelector("#nombre");

const pos = document.querySelector("#pos");

const lista = document.querySelector("#lista");

const modalImg = document.querySelector("#modalimagen");

jugadores.forEach(j => {

j.addEventListener("click", () => {

nombre.textContent = j.dataset.nombre;

pos.textContent = j.dataset.pos;

lista.innerHTML = "";

j.dataset.suplentes.split(",").forEach(s => {
lista.innerHTML += `<li>${s.trim()}</li>`;
});

modal.classList.add("abierto");

});

});

cerrar.addEventListener("click", () => {
modal.classList.remove("abierto");
});

modal.addEventListener("click", (e) => {
if (e.target === modal) {
modal.classList.remove("abierto");
}
});