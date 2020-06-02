//botao Menu

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

form.addEventListener('submit', (e => {
 alert("Cadastro realizado com sucesso")


}))