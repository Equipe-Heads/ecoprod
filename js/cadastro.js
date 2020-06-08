

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


function validar_form_contato(){
var name = formcontato.name.value;
var pontocomercial = formcontato.pontocomercial.value;
var address = formcontato.address.value;
    var telefone = formcontato.telefone.value;
    var cpf = formcontato.cpf.value;
var email = formcontato.email.value;
var repetiremail = formcontato.repetiremail.value;
var senha = formcontato.senha.value;
var repetirsenha = formcontato.repetirsenha.value;

if(name == ""){
alert("Campo nome é obrigatório");
formcontato.nome.focus();
return false;
}   if(pontocomercial == ""){
alert("Campo Ponto Comercial é obrigatório");
formcontato.nome.focus();
return false;
} 
if(address == ""){
alert("Campo Endereço é obrigatório");
formcontato.nome.focus();
return false;
}if(telefone == ""){
alert("Campo telefone é obrigatório");
formcontato.email.focus();
return false;
}if(cpf == ""){
alert("Campo cpf é obrigatório");
formcontato.assunto.focus();
return false;
}if(email == ""){
alert("Campo email é obrigatório");
formcontato.mensagem.focus();
return false;
}if(repetiremail == ""){
alert("Campo Repetir Email é obrigatório");
formcontato.mensagem.focus();
return false;
}if(senha == ""){
alert("Campo Senha é obrigatório");
formcontato.mensagem.focus();
return false;
}if(repetirsenha == ""){
alert("Campo Repetir Senha é obrigatório");
formcontato.mensagem.focus();
return false;
}if(email!=repetiremail){
alert("Os emails não estão iguais");
formcontato.mensagem.focus();
return false;
}  
if(senha!=repetirsenha){
alert("As senhas não estão iguais");
formcontato.mensagem.focus();
return false;
}
else{
alert("Cadastro Concluído com Sucesso");
}      
}

