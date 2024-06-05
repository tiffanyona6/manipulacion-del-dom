// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";

const campoEntrada = document.getElementById("entrada");
const campoSalida = document.getElementById("salida");

campoEntrada.addEventListener("keyup", function (event) {
  console.log(event);
  const valoresAceptados = /^[0-9]+$/;
  if (!campoEntrada.value.match(valoresAceptados)) {
    campoEntrada.value = "";
  }
});
