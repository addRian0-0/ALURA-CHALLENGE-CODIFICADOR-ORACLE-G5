/* Elementos DOM */
let btnDecodificar = document.getElementById("btn-descodificar");
let btnCodificar = document.getElementById("btn-codificar");
btnCodificar.addEventListener("click", encriptador);
btnDecodificar.addEventListener("click", desencriptador);

let boxReveal = document.getElementById("box-reveal");
let boxPreview = document.getElementById("box-preview");

let input = document.getElementById("input-txt");
let res = document.getElementById("res-txt");

let btnCopy = document.getElementById("btn-copy");
btnCopy.addEventListener("click", copiarTxt);

function encriptador(entry = "") {

    input.value = input.value.toLowerCase();
    entry = input.value;
    boxPreview.style.display = "none";
    boxReveal.style.display = "flex";

    let reemplazos = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    };

    let regex = new RegExp(Object.keys(reemplazos).join("|"), "gi");
    entry = entry.replace(regex, (matched) => reemplazos[matched]);

    res.textContent = entry;

}

function desencriptador(entry = "") {

    input.value = input.value.toLowerCase();
    entry = input.value;
    boxPreview.style.display = "none";
    boxReveal.style.display = "flex";

    let reemplazos = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"
    };

    let regex = new RegExp(Object.keys(reemplazos).join("|"), "gi");
    entry = entry.replace(regex, (matched) => reemplazos[matched]);

    res.textContent = entry;

}

function copiarTxt() {

  navigator.clipboard.writeText(res.textContent)
    .then(() => {
      console.log('Texto copiado al portapapeles');
    })
    .catch(err => {
      console.error('No se pudo copiar el texto: ', err);
    });

}