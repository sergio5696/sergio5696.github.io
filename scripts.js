//Funciones para hacer interactivas las fotografias de la portada

const fotosPortada = document.getElementsByClassName("fotos_portada");

for (let i=0; i<fotosPortada.length; i++) {
    fotosPortada[i].onmouseover = (e) => ampliarFotos(e);
    fotosPortada[i].onmouseout = (e) => reducirFotos(e);
}

function ampliarFotos(e) {
    if (e.target.id == "foto_portada_proyecto_1") {
        e.target.classList.add("ampliarFotos");
    } else if (e.target.id == "foto_portada_proyecto_2") {
        e.target.classList.add("ampliarFotos");
    } else if (e.target.id == "foto_portada_proyecto_3") {
        e.target.classList.add("ampliarFotos");
    } else if (e.target.id == "foto_portada_proyecto_4") {
        e.target.classList.add("ampliarFotos");
    } else if (e.target.id == "foto_portada_proyecto_5") {
        e.target.classList.add("ampliarFotos");
    }
}

function reducirFotos(e) {
    if (e.target.id == "foto_portada_proyecto_1") {
        e.target.classList.add("reducirFotos");
        e.target.classList.remove("ampliarFotos"); //Para permitir que pueda volver a ampliarse
        setTimeout(function() {
            e.target.classList.remove("reducirFotos");
          }, 500); //El tiempo es el mismo tiempo de transición que tiene la clase
    } else if (e.target.id == "foto_portada_proyecto_2") {
        e.target.classList.add("reducirFotos");
        e.target.classList.remove("ampliarFotos");
        setTimeout(function() {
            e.target.classList.remove("reducirFotos");
          }, 500);
    } else if (e.target.id == "foto_portada_proyecto_3") {
        e.target.classList.add("reducirFotos");
        e.target.classList.remove("ampliarFotos");
        setTimeout(function() {
            e.target.classList.remove("reducirFotos");
          }, 500);
    } else if (e.target.id == "foto_portada_proyecto_4") {
        e.target.classList.add("reducirFotos");
        e.target.classList.remove("ampliarFotos");
        setTimeout(function() {
            e.target.classList.remove("reducirFotos");
          }, 500);
    } else if (e.target.id == "foto_portada_proyecto_5") {
        e.target.classList.add("reducirFotos");
        e.target.classList.remove("ampliarFotos");
        setTimeout(function(){e.target.classList.remove("reducirFotos");}, 500);
    }
}
//comentario1
//Función para cambiar el texto del botón del formulario una vez enviado

let botonFormulario = document.getElementById("boton_formulario");

botonFormulario.onclick = (e) => cambiarTexto(e);

function cambiarTexto(e) {
    e.preventDefault(); //Para evitar que la pagina se recarge al hacer click
    document.getElementById("boton_formulario").value = '¡Enviado!';
}