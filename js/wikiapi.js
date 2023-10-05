let uriLink = 'https://es.wikipedia.org/w/api.php?action=query&prop=revisions&titles=José_Félix_Uriburu&rvslots=*&rvprop=content&formatversion=2&format=json'

let datoApi

let uriFetch = fetch('https://en.wikipedia.org/w/api.php?action=query&formatversion=2&prop=revisions&rvprop=content&rvslots=%2A&titles=Pet_door&format=json', {
    'method': 'get',
    'headers': {'Access-Control-Allow-Origin' : "*"},
    "action": "query",
    "format": "json",
    "prop": "revisions",
    "titles": "Pet_door",
    "formatversion": "2",
    "rvprop": "content",
    "rvslots": "*"
})

let data = uriFetch.then((res) => res.json())