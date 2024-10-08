$(document).ready(function() {
    // Mostrar submenú de "Personal" por defecto
    $('.submenu').first().addClass('active');

    // Toggle para mostrar submenús al hacer clic
    $('.menu-item').on('click', function(e) {
        e.preventDefault();
        
        // Ocultar todos los submenús
        $('.submenu').removeClass('active');
        
        // Mostrar el submenú relacionado
        $(this).next('.submenu').addClass('active');
    });

    // Agregar funcionalidad de clic para los submenús
    $('.submenu-item').on('click', function(e) {
        e.preventDefault();
        
        // Ocultar todos los submenús de nivel inferior
        $(this).siblings('.dropdown').toggle();
    });
});
