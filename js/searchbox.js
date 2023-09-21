//elementos//

let seccion = document.getElementById("noRes")
let cartaCont = document.getElementById("cardContainer")
let barraBus = document.getElementById("searchContainer")

//modelo de clase//

class goberInfame {
    constructor (dato) {
        this.id = dato.id;
        this.nombre = dato.nombre;
        this.tipoGob = dato.tipoGob;
        this.inicio = dato.inicio;
        this.fin = dato.fin;
        this.duracion = dato.duracion;
        this.gabinete = dato.gabinete;
    }
}

//arrays//

const ministerios = [
    ' Matías Sánchez Sorondo',
    ' Octavio Sergio Pico', 
    ' Ernesto Bosch',
    ' Adolfo Bioy', 
    ' Enrique Simón Pérez',
    ' Enrique Uriburu',
    ' Ernesto Padilla',
    ' Guillermo Rothe',
    ' Horacio Beccar Varela',
    ' David Arias',
    ' Octavio Sergio Pico',
    ' Pablo Calatayud',
    ' Francisco Medina',
	' Abel Renard',
    ' Carlos G. Daireaux',
	' Leopoldo Melo',
    ' Ramón S. Castillo',
    ' Manuel Ramón Alvarado',
    ' Carlos Saavedra Lamas',
	' Alberto Hueyo',
    ' Federico Pinedo',
    ' Roberto M. Ortiz',
    ' Carlos Alberto Acevedo',
    ' Manuel M. de Iriondo',
    ' Ramón S. Castillo',
    ' Jorge de la Torre',
    ' Antonio de Tomaso',
    ' Luis Duhau',
    ' Miguel Ángel Cárcano',
    ' Manuel Ramón Alvarado',
    ' Eleazar Videla',
    ' Manuel Ramón Alvarado',
    ' Eleazar Videla',
    ' Pedro Segundo Casal',
    ' Manuel A. Rodríguez',
    ' Eleazar Videla',
	' Diógenes Taboada',
    ' Miguel J. Culaciati',
    ' José María Cantilo',
    ' Julio Argentino Pascual Roca',
    ' Guillermo Rothe',
    ' Enrique Ruiz Guiñazú',
    ' Pedro Groppo',
    ' Federico Pinedo',
    ' Carlos Alberto Acevedo',
    ' Jorge Eduardo Coll',
    ' Guillermo Rothe',
    ' José Padilla',
    ' Cosme Massini Ezcurra',
    ' Daniel Amadeo y Videla',
    ' Manuel Ramón Alvarado',
    ' Luis Alberto Barberis',
    ' Salvador Oría',
    ' Carlos Márquez',
    ' León Scasso',
	' Miguel J. Culaciati',
	' Enrique Ruiz Guiñazú',
	' Carlos Acevedo',
    ' Guillermo Rothe',
    ' Daniel Amadeo y Videla',
	' Salvador Oría',
	' Juan Nerón Tonazzi',
    ' Pedro Pablo Ramírez',
    ' Mario Fincati']

const años = [1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943] //0 2 8 12 13

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

const dias = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

//clases//

const uriburu = new goberInfame ({id: 1, nombre: 'José Félix Benito Uriburu', tipoGob: 'Militar', inicio: `${dias[5]} de ${meses[8]} de ${años[0]}`, fin: `${dias[19]} de ${meses[1]} de ${años[2]}`, duracion: 'un 1 año, 7 meses y 14 días', gabinete: `\n Sus ministerios fueron ${ministerios.slice(0, 15)}`})

const justo = new goberInfame ({id: 2, nombre: 'Agustín Pedro Justo', tipoGob: 'Democrático Electo', inicio: `${dias[19]} de ${meses[1]} de ${años[2]}`, fin: `${dias[19]} de ${meses[1]} de ${años[8]}`, duracion: 'unos 6 años', gabinete: `\n Sus ministerios fueron ${ministerios.slice(15, 36)}`})

const ortiz = new goberInfame ({id: 3, nombre: 'Roberto Marcelino Ortiz', tipoGob: 'Democrático Electo', inicio: `${dias[19]} de ${meses[1]} de ${años[8]}`, fin: `${dias[26]} de ${meses[5]} de ${años[12]}`, duracion: 'unos 3 años, 4 meses y 7 días', gabinete: `\n Sus ministerios fueron ${ministerios.slice(36, 56)}`})

const castillo = new goberInfame ({id: 4, nombre: 'Ramón Antonio Castillo', tipoGob: 'Democrático Electo', inicio: `${dias[26]} de ${meses[5]} de ${años[12]}`, fin: `${dias[3]} de ${meses[5]} de ${años[13]}`, duracion: 'unos 11 meses y 8 días', gabinete: `\n Sus ministerios fueron ${ministerios.slice(56, 64)}`})

const carta = [
    {
        id: 0,
        titulo: `${uriburu.nombre}`,
        img: `src/img/José_Félix_Uriburu.jpg`,
        info: 'Presidente de la Nación'
    },
    {
        id: 1,
        titulo: `${justo.nombre}`,
        img: `src/img/Presidente_Agustín_Pedro_Justo.png`,
        info: 'Presidente de la Nación'
    },
    {
        id: 2,
        titulo: `${ortiz.nombre}`,
        img: `src/img/Robertomortiz.jpg`,
        info: 'Presidente de la Nación'
    },
    {
        id: 3,
        titulo: `${castillo.nombre}`,
        img: `src/img/Ramoncastillo.jpg`,
        info: 'Presidente de la Nación'
    },
    {
        id: 4,
        titulo: `Ley.11682`,
        img: `src/img/ley.jpg`,
        info: 'Impuesto del rédito'
    },
        {
        id: 5,
        titulo: `Ley.11729`,
        img: `src/img/ley.jpg`,
        info: 'Reorganización del código de comercio'
    },
        {
        id: 6,
        titulo: `Ley.12155`,
        img: `src/img/ley.jpg`,
        info: 'Establecimiento del banco central'
    },
    {
        id: 7,
        titulo: `Ley.12160`,
        img: `src/img/ley.jpg`,
        info: 'Instituciones del banco central'
    },
    {
        id: 8,
        titulo: `Golpe del 30'`,
        img: `src/img/arton23488.jpg`,
        info: 'Inicio de la Década Infame'
    },
    {
        id: 9,
        titulo: `Fraude Patriótico`,
        img: `src/img/imagen8677.jpg`,
        info: 'Alteración del proceso electoral'
    },
    {
        id: 10,
        titulo: `Plan Pinedo`,
        img: `src/img/descargar.jpg`,
        info: 'Intento de Industrialización'
    },
    {
        id: 11,
        titulo: `Revolución del 43`,
        img: `src/img/farrelperon.jpg`,
        info: 'Fin de la Década Infame'
    },
    {
        id: 12,
        titulo: `Concordancia`,
        img: `src/img/uriburuJusto.jpg`,
        info: 'Alianza anti-personalista conservadora'
    },
    {
        id: 13,
        titulo: `Personalistas`,
        img: `src/img/yri.jpg`,
        info: 'Radicales yrigoyenistas'
    },
    {
        id: 14,
        titulo: `Anti personalistas`,
        img: `src/img/anti.png`,
        info: 'Radicales principistas'
    },
    {
        id: 15,
        titulo: `Conservadores`,
        img: `src/img/Julio_roca_hijo.png`,
        info: 'Sucesores del PAN'
    }
]

const ningunRes = {titulo: 'No se encontró resultado', img: `src/img/triste.jpg`, info: 'Lo sentimos...\n¡Vuelva a buscar!'}

//array de clases//

const presidentesObj = [justo, uriburu, , ortiz, castillo]

//eventos//

let buscar = document.querySelector("input")
let buscarId = document.getElementById("json")

buscar.addEventListener("input", (e) => {
    let value = e.target.value.toLowerCase()
    sessionStorage.setItem("busqueda", value)
    if (carta.some((el) => el.titulo.toLowerCase().includes(value))) {
        const valueFilter = carta.filter((carta) => {
            return (
            carta.titulo.toLowerCase().includes(value)
            )
        })
        mostrarCarta(valueFilter)
        seccion.style.display = "none";
    }else {
        cartaCont.style.display = "none";
        seccion.style.display = "flex";
        mostrarNingunRes()
    }
})

buscar.addEventListener("focusout", () => {
    cartaCont.style.display = "none";
    seccion.style.display = "none";
})

function mostrarCarta(filtro) {
    cartaCont.style.display = "flex";
	cartaCont.innerHTML = filtro
		.map((item) => {
			let { titulo, img, info } = item;
			return `
            <div class="cardPres">
                <img src="${img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="card-inner-body">
                        <h5 class="card-title">${titulo}</h5>
                        <a href="lorem.html">Ver</a>
                    </div>
                    <h6 class="card-subtitle">${info}</h6>
                </div>
            </div>`;
		})
		.join("");
}

function mostrarNingunRes() {
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

let busqueda = sessionStorage.getItem("busqueda")
buscarId.value = busqueda