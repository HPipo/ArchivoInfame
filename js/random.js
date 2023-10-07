let rdmBtn = document.getElementById("Random")
const enAnexo4 = (window.location.href.includes("index") || window.location.href.includes("anexog") || window.location.href.includes("anexol") || window.location.href.includes("anexos") || window.location.href.includes("anexom")) ? true : false

rdmBtn.addEventListener("click", () => {
    let random = Math.round(Math.random() * 15 + 1)
    enAnexo4 ? randomUno(random) : randomDos(random)
})

function randomUno(random) {
    if (random == 1) {
        window.location.replace("presidentes/uriburu.html");
    }
    else if (random == 2) {
        window.location.replace("presidentes/justo.html");
    }
    else if (random == 3) {
        window.location.replace("presidentes/ortiz.html");
    }
    else if (random == 4) {
        window.location.replace("presidentes/castillo.html");
    }
    else if (random == 5) {
        window.location.replace("leyes/11682.html");
    }
    else if (random == 6) {
        window.location.replace("leyes/11729.html");
    }
    else if (random == 7) {
        window.location.replace("leyes/12155.html");
    }
    else if (random == 8) {
        window.location.replace("leyes/12160.html");
    }
    else if (random == 9) {
        window.location.replace("sucesos/gol30.html");
    }
    else if (random == 10) {
        window.location.replace("sucesos/fraup.html");
    }
    else if (random == 11) {
        window.location.replace("movpoliticos/conse.html");
    }
    else if (random == 12) {
        window.location.replace("sucesos/planpi.html");
    }
    else if (random == 13) {
        window.location.replace("sucesos/rev43.html");
    }
    else if (random == 14) {
        window.location.replace("movpoliticos/conco.html");
    }
    else if (random == 15) {
        window.location.replace("movpoliticos/perso.html");
    }
    else {
        window.location.replace("movpoliticos/anti.html");
    }
}

function randomDos(random) {
    if (random == 1) {
        window.location.replace("../presidentes/uriburu.html");
    }
    else if (random == 2) {
        window.location.replace("../presidentes/justo.html");
    }
    else if (random == 3) {
        window.location.replace("../presidentes/ortiz.html");
    }
    else if (random == 4) {
        window.location.replace("../presidentes/castillo.html");
    }
    else if (random == 5) {
        window.location.replace("../leyes/11682.html");
    }
    else if (random == 6) {
        window.location.replace("../leyes/11729.html");
    }
    else if (random == 7) {
        window.location.replace("../leyes/12155.html");
    }
    else if (random == 8) {
        window.location.replace("../leyes/12160.html");
    }
    else if (random == 9) {
        window.location.replace("../sucesos/gol30.html");
    }
    else if (random == 10) {
        window.location.replace("../sucesos/fraup.html");
    }
    else if (random == 11) {
        window.location.replace("../movpoliticos/conse.html");
    }
    else if (random == 12) {
        window.location.replace("../sucesos/planpi.html");
    }
    else if (random == 13) {
        window.location.replace("../sucesos/rev43.html");
    }
    else if (random == 14) {
        window.location.replace("../movpoliticos/conco.html");
    }
    else if (random == 15) {
        window.location.replace("../movpoliticos/perso.html");
    }
    else {
        window.location.replace("../movpoliticos/anti.html");
    }
}