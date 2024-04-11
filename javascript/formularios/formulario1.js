function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var contrasena = document.getElementById("contrasena").value;
    if (!nombre.match(/^[a-zA-Z0-9]+$/) || nombre.length < 5) {
        alert("El nombre debe contener al menos 5 caracteres y solo puede contener letras y números.");
        return false;
    }
    if (contrasena.length < 5) {
        alert("La contraseña debe contener al menos 5 caracteres.");
        return false;
    }
        return true;
    }
