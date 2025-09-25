window.addEventListener('load', () => {
    const scene = document.querySelector('a-scene');
    const loader = document.getElementById('loader');

    // Ocultar el loader una vez que la escena de AR.js esté completamente cargada
    scene.addEventListener('loaded', () => {
        if (loader) {
            loader.style.display = 'none';
        }
    });

    // Un fallback por si el evento 'loaded' no se dispara
    setTimeout(() => {
        if (loader) {
            loader.style.display = 'none';
        }
    }, 5000); // Ocultar después de 5 segundos
});