function usuario(){
    location.href="/template/usuario/usuario.html"
}
function datos(){
    location.href="/template/datos/datos.html"
}
function cliente(){
    location.href="/template/cliente/clientes.html"
}

function empleados(){
    location.href="/template/empleados/empleado.html"
}

function productos(){
    location.href="/template/productos/productos.html"
}
function proveedor(){
    location.href="/template/proveedor/proveedor.html"
}
function reportes(){
    location.href="/template/reportes/reportes.html"
}
function ventas(){
    location.href="/template/ventas/ventas.html"
}



$(document).ready(function() {
    $('#tblUsuarios').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            'copy', 'excel', 'pdf', 'print'
        ]
    } );
} );


//cliente
$(document).ready(function() {
    $('#tblproductos').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            'copy', 'excel', 'pdf', 'print'
        ]
    } );
} );