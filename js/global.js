const cardNovaLista = document.getElementById('cardNovaLista')
const btnNovaLista = document.getElementById('btnNovaLista')
const formNovaLista = document.getElementById('novaLista')
const divListas = document.getElementById('listas')

let listas = []

btnNovaLista.addEventListener('click', function(){
    cardNovaLista.style.display = 'block'
})

formNovaLista.addEventListener('submit', function(event){
    event.preventDefault()
    const inputTitulo = document.querySelector('input[name="tituloLista"]')
    if (inputTitulo.value != ''){
        const novaLista = {
            id: listas.length + 1,
            titulo: inputTitulo.value
        }
        inputTitulo.value = ''
        listas.push(novaLista)
        window.localStorage.listas = JSON.stringify(listas)
        renderList()
    }
    console.log(listas)
})

formNovaLista.addEventListener('reset', function(event){
    cardNovaLista.style.display = 'none'
})

//funcao para adicionar os itens da tela
function renderList () {
    //lendo as listas salvas no localStorage
    listas = JSON.parse(window.localStorage.listas)
    //limpando a div que recebe os cards das listas
    divListas.innerHTML = ""
    //para cada lista no array de listas criando um novo card na tela
    listas.map(lista => {
        let h2Tag = document.createElement('H2')
        h2Tag.innerHTML = lista.titulo
        let divTag = document.createElement('DIV')
        divTag.setAttribute('class','card-lista')
        divTag.appendChild(h2Tag)
        divListas.appendChild(divTag)
        console.log(divTag)
    })
}
if (window.localStorage.listas?.length > 0){
    renderList()
}