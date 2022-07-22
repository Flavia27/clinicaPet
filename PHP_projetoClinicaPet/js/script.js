$('#form-contato').submit(function(){
    var nome = $('#nome');
    var erro = $('.alert');
    var campo = $('#campo-erro');
    
    alert("A consulta do Pet foi Agendada!");
    if(nome.val()==''){
        erro.removerClass(d-none);
        campo.html('nome');

        return false;
    }
return false;
});