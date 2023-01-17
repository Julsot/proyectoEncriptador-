function encriptar(){
    var carga = document.getElementById("encriptado").ariaValueMax.toLowerCase()

    var encriptado = carga.replace(/e/img, "enter")
    var encriptado = carga.replace(/i/img, "imes")
    var encriptado = carga.replace(/a/img, "ai")
    var encriptado = carga.replace(/o/img, "ober")
    var encriptado = carga.replace(/u/img, "ufat")
}