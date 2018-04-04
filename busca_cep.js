$(document).ready( function() {
    $('#txtCep').mask('99.999-999');
    /* Executa a requisição quando o campo CEP perder o foco */
    $('#txtCep').blur(function(){
        /* Configura a requisição AJAX */
        $.ajax({
            url : 'busca_cep.php', /* URL que será chamada */
            type : 'POST', /* Tipo da requisição */
            data: 'cep=' + $('#txtCep').val(), /* dado que será enviado via POST */
            dataType: 'json', /* Tipo de transmissão */
            success: function(data){
                if(data.sucesso == 1){
                    $('#txtLogradouro').val(data.rua);
                    $('#txtBairro').val(data.bairro);
                    $('#txtCidade').val(data.cidade);
                    $('#txtEstado').val(data.estado);

                    $('#txtNumero').focus();
                }
            }
        });
        return false;
    });

    $("#btnCancelar").click(function(){
        $("#form_cep").reset();
    });
});
$("#btnSalvar").click(function(){
    if($("#txtCep").val() != '') {
        alert('Cep consultado com sucesso!');
    }else{
        $('#txtCep').focus();
    }
});