document.getElementById("boton").addEventListener("click", function () {
    document.getElementById("mensaje").textContent =
        "¡Te esperamos en nuestra panadería!";
});

function iniciarSesion() {
    const usuario = document.getElementById("usuario").value;

    if (usuario === "") {
        document.getElementById("resultadoLogin").textContent =
            "Introduce tu nombre de usuario.";
    } else {
        document.getElementById("resultadoLogin").textContent =
            "Bienvenido/a, " + usuario + "!";
    }
}

document.getElementById("boton").addEventListener("click", function () {