fetch('/researchers.json')
    .then((response) => {
        return response.json()
    })
    .then((researchers) => {
        var template = document.getElementById('template').innerHTML
        var rendered = Mustache.render(template, researchers)
        document.getElementById('search-result').innerHTML = rendered
    })
    .catch((err) => {
        console.log('Erro no retorno dos dados', err)
    })
