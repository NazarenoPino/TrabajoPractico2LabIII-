
function agregarComentario(evento){
    evento.preventDefault();

    let div = document.getElementById("p-error")
    let p = div.querySelector("p")

    let usuario = document.getElementById("usuario-ingresado").value;
    let comentario = document.getElementById("comentario-ingresado").value;

    if ( usuario === "") {
        if (p === null) {
            let mensajeError = document.createTextNode("usuario no ingresado")
            let parrafoError = document.createElement("p")
            parrafoError.appendChild(mensajeError)
            document.getElementById("p-error").appendChild(parrafoError)
            return
        }
        else{
            return
        }
    }
    p.remove()
    /* 
    if (!(p.textContent === "")) {
        p.remove()
    } */

    if (comentario === "") {
        /* alert("Ingrese un comentario") */
        let div = document.getElementById("p-error")
        let p = div.querySelector("p")
        if (p === null) {
            let mensajeError = document.createTextNode("mensaje no ingresado")
            let parrafoError = document.createElement("p")
            parrafoError.appendChild(mensajeError)
            document.getElementById("p-error").appendChild(parrafoError)
            return
        }
        else{
            return
        }
        
    }
    p.remove()
    
    /* if (!(p.textContent === "")) {
        p.remove()
    } */

    let comentarioAAgregar = document.createTextNode(usuario +"  "+ comentario);
    let parrafoAAgregar = document.createElement("p");
    parrafoAAgregar.appendChild(comentarioAAgregar);
    document.getElementById("div-comentarios").appendChild(parrafoAAgregar)
    
    document.getElementById("usuario-ingresado").value = "";
    document.getElementById("comentario-ingresado").value = "";
}

function cambiarEstadoBoton() {
    if (botonSeguirNoSeguir.textContent === "Seguir") {
        botonSeguirNoSeguir.textContent = "No Seguir";
        botonSeguirNoSeguir.classList.add("btn-danger")
    } else {
        botonSeguirNoSeguir.textContent = "Seguir";
        botonSeguirNoSeguir.classList.remove("btn-danger")
    }
}

function cambiarContadorLikes() {
    if (botonMegustaNoMeGusta.textContent === "Me gusta") {
        botonMegustaNoMeGusta.textContent = "No me gusta";
        botonMegustaNoMeGusta.classList.add("btn-danger")
        cantidadMegusta++;
    } else {
        botonMegustaNoMeGusta.textContent = "Me gusta";
        botonMegustaNoMeGusta.classList.remove("btn-danger")
        cantidadMegusta--;
    }
    cotadorMegusta.textContent = cantidadMegusta + " likes";
}

document.getElementById("boton-comentario").addEventListener("click", agregarComentario);

let botonSeguirNoSeguir = document.getElementById("boton-seguir");
botonSeguirNoSeguir.addEventListener("click", cambiarEstadoBoton);

let botonMegustaNoMeGusta = document.getElementById("boton-likes");
let cotadorMegusta = document.getElementById("label-likes");
let cantidadMegusta = 200;
botonMegustaNoMeGusta.addEventListener("click",cambiarContadorLikes)