function showThankYou() {
    // Obtén los elementos del DOM
    const headerContent = document.getElementById('header-content');
    const mainMessage = document.getElementById('main-message');

    // Cambia el mensaje principal
    mainMessage.textContent = '¡GRACIAS, TRABAJARÉ PARA EVITAR QUE ESTO PASE DE NUEVO!';
    mainMessage.style.fontSize = '0.8rem'; // Ajusta el tamaño del texto
    mainMessage.style.marginBottom = '0'; // Quita el margen inferior

    // Oculta los botones
    const buttons = document.querySelector('.button-container');
    buttons.style.display = 'none';
}
