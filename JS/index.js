const botonEncriptar = document.getElementById('buttonEncriptar');
const botonDesencriptar = document.getElementById('buttonDesencriptar');
const botonCopiar = document.getElementById('buttonCopiar');


function encriptar() {
  let encriptacion = document.getElementById("texto").value;
  encriptacion;
  encriptacion = encriptacion.replaceAll(/e/g, "enter").replaceAll(/i/g, "imes").replaceAll(/a/g, "ai").replaceAll(/o/g, "ober").replaceAll(/u/g, "ufat");
  encriptacion;
  document.getElementById("area").value = encriptacion;  
}

function desencriptar() {
  let desencriptacion = document.getElementById("texto").value;
    desencriptacion;
    desencriptacion = desencriptacion.replaceAll(/enter/g, "e").replaceAll(/imes/g, "i").replaceAll(/ai/g, "a").replaceAll(/ober/g, "o").replaceAll(/ufat/g, "u");
    desencriptacion;

    document.getElementById("area").value = desencriptacion;
}

function copiar() {
  document.getElementById("texto").placeholder = "";
  let copiaTexto = document.getElementById("area");
  copiaTexto.select();
  document.execCommand("copy");
  document.getElementById("texto").value = "";
  document.getElementById("area").value = "";
}

botonEncriptar.addEventListener('click',encriptar);
botonDesencriptar.addEventListener('click',desencriptar);
botonCopiar.addEventListener('click', copiar);

