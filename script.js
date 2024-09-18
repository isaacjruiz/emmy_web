// Reproducir la música de fondo automáticamente y que no se detenga
window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');
    audio.volume = 0.5;  // Ajusta el volumen si lo deseas
});

// Función para reproducir el audio
function playMusic() {
    const audio = document.getElementById('background-music');
    if (audio.paused) {
        audio.play().catch(error => {
            console.log("Error de reproducción:", error);
        });
    }
}

// Detectar cualquier interacción del usuario para iniciar la música
document.body.addEventListener('click', () => {
    playMusic();
});

document.body.addEventListener('touchstart', () => {
    playMusic();  // Para dispositivos móviles
});

// Mostrar la sección de código al hacer clic en el botón "Ir a Ejemplo de Código"
const showCodeButton = document.getElementById('show-code');
const codeSection = document.getElementById('code-section');

showCodeButton.addEventListener('click', () => {
    codeSection.classList.toggle('hidden');
});

// Ejecutar el código ingresado
const runCodeButton = document.getElementById('run-code');
const codeInput = document.getElementById('code-input');
const resultDiv = document.getElementById('result');

runCodeButton.addEventListener('click', () => {
    const code = codeInput.value;
    try {
        resultDiv.textContent = eval(code);
    } catch (e) {
        resultDiv.textContent = 'Error: ' + e.message;
    }
});