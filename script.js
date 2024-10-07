// Función para limpiar la pantalla de la calculadora
function clearDisplay() {
    document.getElementById('display').value = ''; // Establece el valor de la pantalla a vacío
}

// Función para agregar un valor a la pantalla
function appendToDisplay(value) {
    document.getElementById('display').value += value; // Añade el valor al final de lo que ya hay en la pantalla
}

// Función para calcular el resultado de la expresión
function calculateResult() {
    const display = document.getElementById('display'); // Obtiene el elemento de la pantalla
    try {
        // Evalúa la expresión en la pantalla, reemplazando los caracteres de multiplicación y división
        display.value = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
    } catch (error) {
        // Si hay un error en la evaluación, muestra "Error" en la pantalla
        display.value = 'Error';
    }
}
