let uriLink = 'https://es.wikipedia.org/w/api.php?action=query&prop=revisions&titles=José_Félix_Uriburu&rvslots=*&rvprop=content&formatversion=2&format=json'

fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=revisions&titles=Pet_door&rvslots=*&rvprop=content&formatversion=2&format=json`, {
    'mode': 'no-cors',
    'method': 'get',
    'headers': {'Access-Control-Allow-Origin' : "*"}})
.then(res => res.json())