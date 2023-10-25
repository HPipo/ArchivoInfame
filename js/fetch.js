let cardPres = document.getElementById("cardPresidencial")

fetch("../../card.json")
    .then((res) =>  res.json())
    .then((data) =>{
        if (window.location.href.includes("uriburu")) {
            cardPres.innerHTML +=
                `<p class="cardPresElemento">${data[0].presidente.uriburu[0].nombre}</p>
                <img class="cardPresElemento" id="presImg" src="${data[0].presidente.uriburu[0].img}" alt="">
                <div class="cardPresElemento">
                    <p>${data[0].presidente.uriburu[0].titulo}</p>
                    <p>${data[0].presidente.uriburu[0].duracion}</p>
                </div>
                <p class="cardPresElemento">${data[0].presidente.uriburu[0].nacimiento}</p>
                <p class="cardPresElemento">${data[0].presidente.uriburu[0].fallecimiento}</p>
                `
        }else if (window.location.href.includes("castillo")) {
            cardPres.innerHTML +=
                `<p class="cardPresElemento">${data[0].presidente.castillo[0].nombre}</p>
                <img class="cardPresElemento" id="presImg" src="${data[0].presidente.castillo[0].img}" alt="">
                <div class="cardPresElemento">
                    <p>${data[0].presidente.castillo[0].titulo}</p>
                    <p>${data[0].presidente.castillo[0].duracion}</p>
                </div>
                <p class="cardPresElemento">${data[0].presidente.castillo[0].nacimiento}</p>
                <p class="cardPresElemento">${data[0].presidente.castillo[0].fallecimiento}</p>
                `
        }else if (window.location.href.includes("justo")) {
            cardPres.innerHTML +=
                `<p class="cardPresElemento">${data[0].presidente.justo[0].nombre}</p>
                <img class="cardPresElemento" id="presImg" src="${data[0].presidente.justo[0].img}" alt="">
                <div class="cardPresElemento">
                    <p>${data[0].presidente.justo[0].titulo}</p>
                    <p>${data[0].presidente.justo[0].duracion}</p>
                </div>
                <p class="cardPresElemento">${data[0].presidente.justo[0].nacimiento}</p>
                <p class="cardPresElemento">${data[0].presidente.justo[0].fallecimiento}</p>
                `
        }else {
            cardPres.innerHTML +=
                `<p class="cardPresElemento">${data[0].presidente.ortiz[0].nombre}</p>
                <img class="cardPresElemento" id="presImg" src="${data[0].presidente.ortiz[0].img}" alt="">
                <div class="cardPresElemento">
                    <p>${data[0].presidente.ortiz[0].titulo}</p>
                    <p>${data[0].presidente.ortiz[0].duracion}</p>
                </div>
                <p class="cardPresElemento">${data[0].presidente.ortiz[0].nacimiento}</p>
                <p class="cardPresElemento">${data[0].presidente.ortiz[0].fallecimiento}</p>
                `
        }
    })
    .catch("Error en JSON")
