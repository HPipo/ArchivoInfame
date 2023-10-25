let cardPres = document.getElementById("cardPresidencial")

fetch("../../card.json")
    .then((res) =>  res.json())
    .then((obj) => {console.log(obj)})
    .then((data) =>{
        if (window.location.href.includes("uriburu")) {
            for (let element in data.presidente) {
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
            for (let element in data) {
                cardPres.innerHTML += `
                <p class="cardPresElemento">${element.castillo[0]}</p>
                <img class="cardPresElemento" id="presImg" src="${element.castillo[1]}" alt="">
                <div class="cardPresElemento">
                    <p>${element.castillo[2]}</p>
                    <p>${element.castillo[3]}</p>
                </div>
                <p class="cardPresElemento">${element.castillo[4]}</p>
                <p class="cardPresElemento">${element.castillo[5]}</p>`
        }}
    })
    .catch("Error en JSON")
