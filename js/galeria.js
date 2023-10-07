const imagenes = [
    {
        id: 0,
        url: '../../src/img/3.justo_y_juan_pueblo_1934.jpg',
        info: ''
    },
    {
        id: 1,
        url: '../../src/img/843c8481-3a69-4cc2-8e83-237003e1be5f.jpg',
        info: ''
    },
    {
        id: 2,
        url: '../../src/img/16385476280-Lisandro-de-la-Torre-773x458.jpg',
        info: ''
    },
    {
        id: 3,
        url: '../../src/img/20210610150301_decada-infame-argentina-dictaduras.webp.jpg',
        info: ''
    },
    {
        id: 4,
        url: '../../src/img/Caricatura_que_muestra_al_presidente_Hipólito_Yrigoyen_seguido_por_los_gobernadores_personalistas._Caras_y_Caretas,_año_1928.jpg',
        info: ''
    },
    {
        id: 5,
        url: '../../src/img/descargar(1).jpg',
        info: ''
    },
    {
        id: 6,
        url: '../../src/img/descargar.jpg',
        info: ''
    },
    {
        id: 7,
        url: '../../src/img/Julio_roca_hijo.png',
        info: ''
    },
    {
        id: 8,
        url: '../../src/img/Presidente_Agustín_Pedro_Justo.png',
        info: ''
    },
    {
        id: 9,
        url: '../../src/img/Ramoncastillo.jpg',
        info: ''
    },
    {
        id: 10,
        url: '../../src/img/Robertomortiz.jpg',
        info: ''
    },
    {
        id: 11,
        url: '../../src/img/TORRE.jpg',
        info: ''
    },
    {
        id: 12,
        url: '../../src/img/uriburuJusto.jpg',
        info: ''
    },
    {
        id: 13,
        url: '../../src/img/arton23488.jpg',
        info: ''
    },
    {
        id: 14,
        url: '../../src/img/farrelperon.jpg',
        info: ''
    },
    {
        id: 15,
        url: '../../src/img/José_Félix_Uriburu.jpg',
        info: ''
    },
    {
        id: 16,
        url: '../../src/img/imagen8677.jpg',
        info: ''
    },
    {
        id: 17,
        url: '../../src/img/fondo.png',
        info: ''
    }
]

const primeraParte1 = imagenes.slice(0, 3)
const primeraParte2 = imagenes.slice(3, 6)
const segundaParte1 = imagenes.slice(6, 9)
const segundaParte2 = imagenes.slice(9, 12)
const terceraParte1 = imagenes.slice(12, 15)
const terceraParte2 = imagenes.slice(15, 18)

let bodyContainer = document.getElementById("bodyContainer")
let contentContainer = document.createElement("div")
bodyContainer.appendChild(contentContainer)
contentContainer.setAttribute("class", "contentContainer")
let imgContainer = document.createElement("div")
imgContainer.setAttribute("class", "imgContainer")
imgContainer.innerHTML = ''
contentContainer.appendChild(imgContainer)

let primerBtn = document.createElement("button")
let primerBtnTexto = document.createTextNode("<<")
primerBtn.appendChild(primerBtnTexto)
contentContainer.appendChild(primerBtn)
primerBtn.setAttribute("id", "btn1")
let segundoBtn = document.createElement("button")
let segundoBtnTexto = document.createTextNode(">>")
segundoBtn.appendChild(segundoBtnTexto)
contentContainer.appendChild(segundoBtn)
segundoBtn.setAttribute("id", "btn2")

let conteo = 0

primerBtn.addEventListener("click", () => {
    conteo -= 1
    mostrarGaleria()
})

segundoBtn.addEventListener("click", () => {
    conteo++
    mostrarGaleria()
})

function mostrarGaleria() {
    if (conteo == 0) {
        imgContainer.innerHTML = ""
        primerBtn.style.display = "none";
        for (imagen in primeraParte1) {
            imgContainer.innerHTML = primeraParte1.map((item) => {
                let { url, info } = item;
                return `
                    <img class="imgGal" src="${url}" alt="">
                    <p class="pGal">${info}</p>
                `
            }).join("")
        }
    }else if (conteo == 1) {
        imgContainer.innerHTML = ""
        primerBtn.style.display = "block";
        for (imagen in primeraParte2) {
            imgContainer.innerHTML = primeraParte2.map((item) => {
                let { url, info } = item;
                return `
                    <img class="imgGal" src="${url}" alt="">
                    <p class="pGal">${info}</p>
                `
            }).join("")
        }
    }else if (conteo == 2) {
        imgContainer.innerHTML = ""
        for (imagen in segundaParte1) {
            imgContainer.innerHTML = segundaParte1.map((item) => {
                let { url, info } = item;
                return `
                    <img class="imgGal" src="${url}" alt="">
                    <p class="pGal">${info}</p>
                `
            }).join("")
        }
    }else if (conteo == 3) {
        imgContainer.innerHTML = ""
        for (imagen in segundaParte2) {
            imgContainer.innerHTML = segundaParte2.map((item) => {
                let { url, info } = item;
                return `
                    <img class="imgGal" src="${url}" alt="">
                    <p class="pGal">${info}</p>
                `
            }).join("")
        }
    }else if (conteo == 4) {
        segundoBtn.style.display = "block";
        imgContainer.innerHTML = ""
        for (imagen in terceraParte1) {
            imgContainer.innerHTML = terceraParte1.map((item) => {
                let { url, info } = item;
                return `
                    <img class="imgGal" src="${url}" alt="">
                    <p class="pGal">${info}</p>
                `
            }).join("")
        }
    }else {
        segundoBtn.style.display = "none";
        imgContainer.innerHTML = ""
        for (imagen in terceraParte2) {
            imgContainer.innerHTML = terceraParte2.map((item) => {
                let { url, info } = item;
                return `
                    <img class="imgGal" src="${url}" alt="">
                    <p class="pGal">${info}</p>
                `
            }).join("")
        }
    }
}

mostrarGaleria()