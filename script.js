// script.js

// Guardar los registros en el navegador
const registros = JSON.parse(localStorage.getItem("registros")) || [];

// Función para guardar el formulario
document.getElementById("form-historia").addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtener los datos del formulario
    const nuevoRegistro = {
        nombreDueno: document.getElementById("nombre_dueno").value,
        telefonoDueno: document.getElementById("telefono_dueno").value,
        nombreMascota: document.getElementById("nombre_mascota").value,
        especieMascota: document.getElementById("especie_mascota").value,
        fechaCita: document.getElementById("fecha_cita").value,
        horaCita: document.getElementById("hora_cita").value,
    };

    // Guardar el nuevo registro
    registros.push(nuevoRegistro);
    localStorage.setItem("registros", JSON.stringify(registros));

    // Limpiar el formulario
    document.getElementById("form-historia").reset();
});

// Mostrar los registros en la tabla (en registros.html)
if (document.getElementById("tabla-registros")) {
    const tabla = document.getElementById("tabla-registros").getElementsByTagName('tbody')[0];
    registros.forEach((registro, index) => {
        const fila = tabla.insertRow();
        fila.insertCell().innerText = index + 1;
        fila.insertCell().innerText = registro.nombreDueno;
        fila.insertCell().innerText = registro.nombreMascota;
        fila.insertCell().innerText = registro.especieMascota;
        fila.insertCell().innerText = registro.fechaCita;
    });
}
