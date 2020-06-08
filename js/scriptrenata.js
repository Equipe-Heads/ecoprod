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






$(document).ready(function(){
  $('select').formSelect();
});
      



// function cadastro(){
//   alert("Cadastro realizado com sucesso")
// }





// <script type="text/javascript">
//   function validar_form_contato(){
//     var name = formcontato.name.value;
//     var telefone = formcontato.telefone.value;
//     var cpf = formcontato.cpf.value;
//     var email = formcontato.email.value;
    
//     if(name == ""){
//       alert("Campo nome é obrigatório");
//       formcontato.nome.focus();
//       return false;
//     }if(address == ""){
//       alert("Campo Endereço é obrigatório");
//       formcontato.nome.focus();
//       return false;
//     }if(telefone == ""){
//       alert("Campo email é obrigatório");
//       formcontato.email.focus();
//       return false;
//     }if(cpf == ""){
//       alert("Campo assunto é obrigatório");
//       formcontato.assunto.focus();
//       return false;
//     }if(email == ""){
//       alert("Campo mensagem é obrigatório");
//       formcontato.mensagem.focus();
//       return false;
//     }if(repetir-email == ""){
//       alert("Campo Repetir Email é obrigatório");
//       formcontato.mensagem.focus();
//       return false;
//     }if(senha == ""){
//       alert("Campo Senha é obrigatório");
//       formcontato.mensagem.focus();
//       return false;
//     }if(repetir-senha == ""){
//       alert("Campo Repetir Senha é obrigatório");
//       formcontato.mensagem.focus();
//       return false;
//     }      


//   }
// </script>
