let formulario = document.getElementById('form');
formulario.addEventListener('submit', ValidarDatos );


function ValidarDatos(e){
  let nombreCotizante = document.getElementById('nombre').value;
  let cantidadProduto = document.getElementById('cantidad').value;
  let nombreProducto = document.getElementById('producto').value;
  let precioP = document.getElementById('precio').value;
   
  let precioProducto = parseFloat(precioP);

  let listaSpan = document.querySelectorAll('.msg_error');

  if(nombreCotizante != ""){
    listaSpan[0].innerHTML = "";
    if(cantidadProduto >= 3){
      listaSpan[1].innerHTML = "";
      if(nombreProducto != ""){
        listaSpan[2].innerHTML = "";
        if(precioProducto > 0){
          listaSpan[3].innerHTML = "";

          alert('bien hecho');
          MostrarDatos(nombreCotizante, cantidadProduto,nombreProducto, precioProducto);
          e.preventDefault();

        }else{
          listaSpan[3].innerHTML = "Precio Invalido";
          e.preventDefault();
        }
      }else{
        listaSpan[2].innerHTML = "Ingresa un nombre de producto";
        e.preventDefault();
      }
    }else{
      listaSpan[1].innerHTML = "La cantidad debe ser mayor o igual a 3";
      e.preventDefault();
    }
  }else{
    listaSpan[0].innerHTML = "Ingrese un nombre por favor";
    e.preventDefault();
  }

}



function DescuentoRandom() {
  return Math.random() * (15 - 5) + 5;
}

function MostrarDatos(cotizador, cantidad_P, nm_P, pr_U) { 
  let dataListSpan = document.querySelectorAll('.datos');
  dataListSpan[0].innerHTML = `${cotizador}`;
  dataListSpan[1].innerHTML = `${cantidad_P}`;
  dataListSpan[2].innerHTML = `${nm_P}`;
  dataListSpan[3].innerHTML = `$ ${pr_U}`;

  let porcentajeDescuento_random = Math.ceil(DescuentoRandom()); 
  let total = cantidad_P * pr_U;
  let descuento = Math.ceil((total / 100) * porcentajeDescuento_random);
  let dato_final = total - descuento;

  dataListSpan[4].innerHTML = `$ ${total}`;
  dataListSpan[5].innerHTML = `${porcentajeDescuento_random}%`;
  dataListSpan[6].innerHTML = `$ ${dato_final}`;
 }