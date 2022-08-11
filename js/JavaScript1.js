function Enviar() { 
    var nome = document.getElementById("nomeid");
    var email = document.getElementById("emailid");
    if (nome.value != "" && email.value != "") { 
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso'); 
    }else{
        event.preventDefault();
        alert('PREENCHER TODOS OS CAMPOS')
    }
}
    