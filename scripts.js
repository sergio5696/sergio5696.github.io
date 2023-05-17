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
        e.target.classList.remove("ampliarFotos");
    } else if (e.target.id == "foto_portada_proyecto_2") {
        e.target.classList.remove("ampliarFotos");
    } else if (e.target.id == "foto_portada_proyecto_3") {
        e.target.classList.remove("ampliarFotos");
    } else if (e.target.id == "foto_portada_proyecto_4") {
        e.target.classList.remove("ampliarFotos");
    } else if (e.target.id == "foto_portada_proyecto_5") {
        e.target.classList.remove("ampliarFotos");
    }
}