let seccion = document.getElementById("noRes")
let cartaCont = document.getElementById("cardContainer")
let barraBus = document.getElementById("searchContainer")

const carta = [
    {
        id: 0,
        titulo: `José Félix Benito Uriburu`,
        img: `../src/img/José_Félix_Uriburu.jpg`,
        link: `presidentes/uriburu.html`,
        info: 'Presidente de la Nación'
    },
    {
        id: 1,
        titulo: `Agustín Pedro Justo`,
        img: `../src/img/Presidente_Agustín_Pedro_Justo.png`,
        link: `presidentes/justo.html`,
        info: 'Presidente de la Nación'
    },
    {
        id: 2,
        titulo: `Roberto Marcelino Ortiz`,
        img: `../src/img/Robertomortiz.jpg`,
        link: `presidentes/ortiz.html`,
        info: 'Presidente de la Nación'
    },
    {
        id: 3,
        titulo: `Ramón Antonio Castillo`,
        img: `../src/img/Ramoncastillo.jpg`,
        link: `presidentes/castillo.html`,
        info: 'Presidente de la Nación'
    },
    {
        id: 4,
        titulo: `Ley.11682`,
        img: `../src/img/ley.jpg`,
        link: `leyes/11682.html`,
        info: 'Impuesto del rédito'
    },
        {
        id: 5,
        titulo: `Ley.11729`,
        img: `../src/img/ley.jpg`,
        link: `leyes/11729.html`,
        info: 'Reorganización del código de comercio'
    },
        {
        id: 6,
        titulo: `Ley.12155`,
        img: `../src/img/ley.jpg`,
        link: `leyes/12155.html`,
        info: 'Establecimiento del banco central'
    },
    {
        id: 7,
        titulo: `Ley.12160`,
        img: `../src/img/ley.jpg`,
        link: `leyes/12160.html`,
        info: 'Instituciones del banco central'
    },
    {
        id: 8,
        titulo: `Golpe del 30'`,
        img: `../src/img/arton23488.jpg`,
        link: `sucesos/gol30.html`,
        info: 'Inicio de la Década Infame'
    },
    {
        id: 9,
        titulo: `Fraude Patriótico`,
        img: `../src/img/imagen8677.jpg`,
        link: `sucesos/fraup.html`,
        info: 'Alteración del proceso electoral'
    },
    {
        id: 10,
        titulo: `Plan Pinedo`,
        img: `../src/img/descargar.jpg`,
        link: `sucesos/planpi.html`,
        info: 'Intento de Industrialización'
    },
    {
        id: 11,
        titulo: `Revolución del 43`,
        img: `../src/img/farrelperon.jpg`,
        link: `sucesos/rev43.html`,
        info: 'Fin de la Década Infame'
    },
    {
        id: 12,
        titulo: `Concordancia`,
        img: `../src/img/uriburuJusto.jpg`,
        link: `movpoliticos/conco.html`,
        info: 'Alianza anti-personalista conservadora'
    },
    {
        id: 13,
        titulo: `Personalistas`,
        img: `../src/img/yri.jpg`,
        link: `movpoliticos/perso.html`,
        info: 'Radicales yrigoyenistas'
    },
    {
        id: 14,
        titulo: `Anti personalistas`,
        img: `../src/img/anti.png`,
        link: `movpoliticos/anti.html`,
        info: 'Radicales principistas'
    },
    {
        id: 15,
        titulo: `Conservadores`,
        img: `../src/img/Julio_roca_hijo.png`,
        link: `movpoliticos/conse.html`,
        info: 'Sucesores del PAN'
    }
]

const carta2 = carta.map((el) => {
    return {
        id: el.id,
        titulo: el.titulo,
        img: "../" + el.img,
        link: "../" + el.link,
        info: el.info
    }    
})

const ningunRes = {titulo: 'No se encontró resultado', img: `../src/img/triste.jpg`, info: 'Lo sentimos...\n¡Vuelva a buscar!'}

const ningunRes2 = {titulo: 'No se encontró resultado', img: `../../src/img/triste.jpg`, info: 'Lo sentimos...\n¡Vuelva a buscar!'} 

//eventos//

let buscar = document.querySelector("input")
let buscarId = document.getElementById("json")
const enAnexo3 = (window.location.href.includes("index") || window.location.href.includes("anexog") || window.location.href.includes("anexol") || window.location.href.includes("anexos") || window.location.href.includes("anexom")) ? true : false

buscar.addEventListener("input", (e) => {
    let value = e.target.value.toLowerCase()
    let count = buscar.value.length
    sessionStorage.setItem("busqueda", value)
    if (count < 2) {
        cartaCont.style.display = "none";
        seccion.style.display = "none";
    }else if (carta.some((el) => el.titulo.toLowerCase().includes(value))) {
        enAnexo3 ? filtrarInfo(value) : filtrarInfo2(value)
        seccion.style.display = "none";
    }else {
        cartaCont.style.display = "none";
        seccion.style.display = "flex";
        mostrarNingunRes()
    }
})

buscar.addEventListener("focusout", () => {
    setTimeout(() => {
        cartaCont.style.display = "none";
        seccion.style.display = "none";
    }, 6000)
})


function filtrarInfo(value) {
    const valueFilter = carta.filter((carta) => {
        return (
        carta.titulo.toLowerCase().includes(value)
        )
    })
    mostrarCarta(valueFilter)
}

function filtrarInfo2(value) {
    const valueFilter = carta2.filter((carta2) => {
        return (
        carta2.titulo.toLowerCase().includes(value)
        )
    })
    mostrarCarta(valueFilter)
}

function mostrarCarta(filtro) {
    cartaCont.style.display = "flex";
	cartaCont.innerHTML = filtro
		.map((item) => {
			let { titulo, img, link, info } = item;
			return `
            <div class="cardPres">
                <img src="${img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="card-inner-body">
                        <h5 class="card-title">${titulo}</h5>
                        <a href=${link}>Ver</a>
                    </div>
                    <h6 class="card-subtitle">${info}</h6>
                </div>
            </div>`;
		})
		.join("");
}

function mostrarNingunRes() {
    enAnexo3 ? mostrarRes1() : mostrarRes2()
}

function mostrarRes1() {
    seccion.innerHTML = `
    <div class="cardNingunRes">
        <img src="${ningunRes.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <div class="card-inner-body">
                <h5 class="card-title">${ningunRes.titulo}</h5>
            </div>
            <h6 class="card-subtitle">${ningunRes.info}</h6>
        </div>
    </div>`
}

function mostrarRes2() {
    seccion.innerHTML = `
    <div class="cardNingunRes">
        <img src="${ningunRes2.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <div class="card-inner-body">
                <h5 class="card-title">${ningunRes2.titulo}</h5>
            </div>
            <h6 class="card-subtitle">${ningunRes2.info}</h6>
        </div>
    </div>`
}

let busqueda = sessionStorage.getItem("busqueda")
buscarId.value = busqueda