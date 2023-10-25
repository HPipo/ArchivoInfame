fetch("../../card.json")
    .then((res) => res.json())
    .then((data) =>{
        if (window.location.href.includes("uriburu")) {
            for (element in data.presidente) {
                console.log(data)
            }
        }
    })
    .catch("Error en JSON")
