// Obtener productos del carrito desde localStorage
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const listaCarrito = document.getElementById('lista-carrito');
const totalElemento = document.getElementById('total');

function mostrarCarrito() {
    listaCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach((producto, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
            <td><input type="number" value="1" min="1" onchange="actualizarCantidad(${index}, this.value)"></td>
            <td>$${producto.precio}</td>
            <td><button onclick="eliminarDelCarrito(${index})">Eliminar</button></td>
        `;
        listaCarrito.appendChild(fila);
        total += producto.precio;
    });

    totalElemento.textContent = `Total: $${total.toFixed(2)}`;
}

function actualizarCantidad(index, cantidad) {
    // Actualizar el precio total basado en la cantidad seleccionada
    const precio = carrito[index].precio;
    const totalElemento = listaCarrito.rows[index].cells[3];
    totalElemento.textContent = `$${(precio * cantidad).toFixed(2)}`;
}

function eliminarDelCarrito(index) {
    // Eliminar producto del carrito
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

function procederAlPago() {
    alert("Redirigiendo a la pasarela de pago...");
    // Aquí puedes redirigir a una pasarela de pago externa
}

// Mostrar el carrito al cargar la página
mostrarCarrito();
