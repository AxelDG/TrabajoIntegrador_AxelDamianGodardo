let precio = document.getElementById("precio");
let agregar = document.getElementById("agregar_btn");
let descuento = document.getElementById("descuento_btn");
let lista = document.getElementById("lista");
let desc = document.getElementById("desc");
let productos = [];
let precios = [];
let suma = 0;

const agregarCarrito = () => {
  productos.push(producto.value);
  precios.push(Number(precio.value));
  lista?.innerHTML += `<li>${producto.value} : $${precio.value}</li>`;
  suma += Number(precio.value);
  desc?.innerHTML = ` El total de su compra es de $${suma}`;
  producto.value = "";
  precio.value = "";
};

agregar.addEventListener("click", agregarCarrito);

const hayDescuento = () => {
  if (suma > 2500) {
    desc?.innerHTML = `¡Obtuvo un descuento!. El valor total es de $${
      suma * 0.9
    }`;
  } else {
    desc.innerHTML = `El total de su compra es de $${suma}`;
  }
};
descuento.addEventListener("click", hayDescuento);
