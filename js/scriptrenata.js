//botao Menu





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

  } )

}







document
.querySelector("select[name=uf]")
.addEventListener("change", getCities)




  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
        

//modal-trigger


  $(document).ready(function(){
    $('.modal').modal();
  });
          




  // BOTAO DROPDOWN HOME


  $('.dropdown-trigger').dropdown();

  const elemsDropdown = document.querySelectorAll(".dropdown-trigger");
  const instancesDropdown = M.Dropdown.init(elemsDropdown, {
    coverTrigger:false
  });



//botao cadastrar
 const form = document.getElementById('novo-topico');

form.addEventListener('submit', () => {
 alert("Cadastro realizado com sucesso")


})




$(document).ready(function(){
  $('select').formSelect();
});
