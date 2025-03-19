// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let lista = document.getElementById("listaAmigos");

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    if (nombre == "") {
        alert("Por favor, inserte un nombre")
        return
    }
    else{
        amigos.push(nombre);
        document.getElementById("amigo").value = "";
        actualizarListaAmigos();
        return
    }    
}

function actualizarListaAmigos() {
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("Por favor, agrega al menos un amigo");
        return;
    }
    else {
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        alert(`El amigo sorteado es: ${amigoSorteado}`);
        lista.innerHTML = "";
        amigos = [];
    }
    
}