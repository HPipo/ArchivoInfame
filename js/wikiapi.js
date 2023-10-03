let title = 'José_Félix_Uriburu'

let wikiUri = `https://es.wikipedia.org/wiki/api.php?action=query&prop=revisions&titles=José_Félix_Uriburu&rvslots=*&rvprop=content&formatversion=2`

fetch(wikiUri)
.then((resp) => {resp.json()})
.then((data) => {console.log(data)})