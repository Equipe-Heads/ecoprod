

function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")
    
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then(states => {
        for(const state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
 

        }
    } )
}


populateUFs()


function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
        console.log(event.target.value)
        
        const ufValue = event.target.value

        const url=`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

          
    fetch(url)
    .then( res => res.json() )
    .then(cities => {
        for(const city of cities){
            citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
        }

        citySelect.disabled = false
    } )

}







document
.querySelector("select[name=uf]")
.addEventListener("change", getCities)





//botao cadastrar
const form = document.getElementById('cadastro');

form.addEventListener('submit', () => {
 alert("Cadastro realizado com sucesso")


})


