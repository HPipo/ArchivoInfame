fetch("../../card.json")
    .then((res) => res.json())
    .then((data) =>{
        if (window.location.href.includes("uriburu")) {
            for (let element in data.presidente) {
                console.log(element)
            }
        }
    })
    .catch("Error en JSON")
