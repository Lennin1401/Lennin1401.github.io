let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find(producto => producto.nombre === nombre);
    if (productoExistente) {
        alert(`${nombre} ya está en el carrito.`);
    } else {
        const producto = { nombre, precio };
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        alert(`${nombre} ha sido agregado al carrito.`);
    }
}
