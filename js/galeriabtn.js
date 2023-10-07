let gal = document.getElementById("Galería")
let pathGal = document.location.pathname

const enAnexo5 = (window.location.href.includes("index") || window.location.href.includes("anexog") || window.location.href.includes("anexol") || window.location.href.includes("anexos") || window.location.href.includes("anexom")) ? true : false

enAnexo5 ? etiquetaTres() : etiquetaCuatro()

function etiquetaTres() {
    gal.addEventListener("click", () => {
        if (!pathGal.includes("galeria")) {
            window.location.href = "galeria/galeria.html"
        }else {
            Swal.fire({
                icon: 'error',
                title: 'Ups...',
                text: '¡Ya se encuentra en la página!'
              })
        }
    })
}

function etiquetaCuatro() {
    gal.addEventListener("click", () => {
        if (!pathGal.includes("galeria")) {
            window.location.href = "../galeria/galeria.html"
        }else {
            Swal.fire({
                icon: 'error',
                title: 'Ups...',
                text: '¡Ya se encuentra en la página!'
              })
        }
    })
}