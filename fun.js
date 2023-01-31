function encriptar (){

    let encriptado = document.getElementById("mensaje").value.toLowerCase();
    let textEncript = encriptado.replace[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];

    document.getElementById("goodthings").style.display = "none";
    document.getElementById("downnapo").style.display = "none";
    document.getElementById("result").innerHTML = textEncript;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
}

function desencriptar (){

    let encriptado = document.getElementById("mensaje").value.toLowerCase();
    let textEncript = encriptado.replace[["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober","o"], ["ufat","u"]];

    document.getElementById("goodthings").style.display = "none";
    document.getElementById("downnapo").style.display = "none";
    document.getElementById("result").innerHTML = textEncript;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";

}

function copiar (){

    let contenido = document.querySelector(".result");
    contenido.select();
    document.execCommand("copy");
    alert("Se copió");
}

