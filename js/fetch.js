let cardPres = document.getElementById("cardPresidencial")

fetch("../../card.json")
    .then((res) =>  res.json())
    .then((obj) => {console.log(obj)})
    .then((data) =>{
        if (window.location.href.includes("uriburu")) {
            for (let element in data) {
                cardPres.innerHTML += `
                <p class="cardPresElemento"></p>
                <img class="cardPresElemento" id="presImg" src="" alt="">
                <div class="cardPresElemento">
                    <p></p>
                    <p></p>
                </div>
                <p class="cardPresElemento"></p>
                <p class="cardPresElemento"></p>
                `
            }
        }else {
            cardPres.innerHTML += data.forEach(element => {
                `<p class="cardPresElemento">${castillo.nombre}</p>
                <img class="cardPresElemento" id="presImg" src="${castillo.img}" alt="">
                <div class="cardPresElemento">
                    <p>${castillo.titulo}</p>
                    <p>${castillo.duracion}</p>
                </div>
                <p class="cardPresElemento">${castillo.nacimiento}</p>
                <p class="cardPresElemento">${castillo.fallecimiento}</p>
                `
            });
        }
    })
    .catch("Error en JSON")
