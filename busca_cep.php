<?php
/**
 * Created by PhpStorm.
 * User: wmomesso
 * Date: 4/4/18
 * Time: 10:57 AM
 */
#TODO busca_cep.php
$cep = str_replace('.', '', str_replace('-', '', $_POST['cep']));

$reg = simplexml_load_file("https://viacep.com.br/ws/".$cep."/xml/");

    $dados['sucesso'] = true;
    $dados['rua'] = (string)$reg->logradouro;
    $dados['bairro'] = (string)$reg->bairro;
    $dados['cidade'] = (string)$reg->localidade;
    $dados['estado'] = (string)$reg->uf;
    echo json_encode($dados);
