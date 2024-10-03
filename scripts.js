$(document).ready(function() {
    // Mostrar y ocultar submenús con una pequeña animación
    $('.menu li').hover(function() {
        $(this).children('.submenu').stop(true, true).slideDown(300);
    }, function() {
        $(this).children('.submenu').stop(true, true).slideUp(300);
    });
});