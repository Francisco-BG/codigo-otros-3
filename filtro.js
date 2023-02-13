// Tenemos un li de productos

const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
]

const li = document.getElementById("lista-de-productos") //lista-de-productos es un id, la funcion hacíá referencia a un nombre
const $i = document.querySelector('.input');
/*Faltaba la definición de displayProductos */
function displayProductos(productos){
  for (let i = 0; i < productos.length; i++) {
    //let li =document.createElement("li") 
    var d = document.createElement("div")
    d.classList.add("producto")

    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productos[i].nombre

    var imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);

    d.appendChild(ti)
    d.appendChild(imagen)

    li.appendChild(d) //No se ha creado el elemento lista, para hacer la lista de productos
  }
}

displayProductos(productos);//Se llamaba la función sin estar definida
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function () {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")

    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre

    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);

    d.appendChild(ti)
    d.appendChild(imagen)

    li.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  