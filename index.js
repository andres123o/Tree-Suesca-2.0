
const boton = document.getElementById("buttom-img")
const divRespuestas = document.getElementById("container-respuestas")
const divCerrrar = document.getElementById("cerrar-container")

function verRespuesta () {
    boton.addEventListener('click', () => {
        divRespuestas.style.display = "block"
    })
}

function cerrarVentana () {
    divCerrrar.addEventListener('click', () => {
        divRespuestas.style.display = "none"
    })
}
verRespuesta()
cerrarVentana()