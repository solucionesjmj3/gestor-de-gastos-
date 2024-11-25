// crearRegistro.js
import { Gasto } from '../JS/gasto.js'; // Ajusta la ruta según la ubicación de tu archivo

// Función para manejar el registro de gastos
document.getElementById("crear").onclick = (event) => {
    event.preventDefault(); // Evitar el comportamiento predeterminado del botón

    // Obtener valores de los campos del formulario
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const amount = parseFloat(document.getElementById("amount").value);

    // Validar que todos los campos requeridos estén completos
    if (category && description && date && !isNaN(amount) && amount > 0) {
        // Crear el objeto gasto utilizando la clase Gasto
        const nuevoGasto = new Gasto(category, description, date, amount);

        // Obtener los gastos existentes de localStorage
        const registroGastos = JSON.parse(localStorage.getItem("localGastos")) || [];
        
        // Agregar el nuevo gasto a la lista
        registroGastos.push(nuevoGasto);
        
        // Guardar la lista actualizada en localStorage
        localStorage.setItem("localGastos", JSON.stringify(registroGastos));

        // Redirigir a visualizar.html (cambia la ruta si es necesario)
        window.location.href = "../html/MenuV.html"; // Asegúrate de que la ruta sea correcta
    } else {
        // Mostrar un mensaje de error si faltan campos o si el monto no es válido
        const alertElement = document.getElementById("alert");
        alertElement.classList.remove("d-none");
        alertElement.innerText = "Por favor completa todos los campos correctamente.";
    }
};
