let cardPres = document.getElementById("cardPresidencial")

fetch("../../card.json")
    .then((res) =>  res.json())
    .then((obj) => {console.log(obj)})
/*     .then((data) =>{
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
                <p class="cardPresElemento"></p
                `
            }
        }
    }) */
    .catch("Error en JSON")
