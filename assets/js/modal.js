var modal = document.getElementById('myModal');
var btn = document.getElementById('openModalBtn');
var span = document.getElementsByClassName('close')[0];
var x = document.getElementsByClassName('btn')[0];
var registrationForm = document.getElementById('registrationForm');

btn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}
x.onclick = function() {
    modal.style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

registrationForm.onsubmit = function(event) {
    event.preventDefault();
    // Aquí puedes agregar código para manejar el envío del formulario de registro
    // Por ejemplo, puedes usar AJAX para enviar los datos a tu servidor.
    // Después de completar el registro, puedes cerrar el modal:
    modal.style.display = 'none';
}
