let title = 'José_Félix_Uriburu'

let wikiUri = `https://es.wikipedia.org/wiki/api.php?action=query&prop=revisions&titles=Pet_door&rvslots=*&rvprop=content&formatversion=2`

fetch(wikiUri, {'mode': 'no-cors'})
.then((resp) => {return resp.json()})
.then((data) => {console.log(data)})