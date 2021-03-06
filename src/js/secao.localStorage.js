// Pegar orçamento
function pegarOrcamento() {
    var valorOrcamento, valorInputado;
    novoValorOrcamento = localStorage.getItem('orcamento');
    valorInputado = $('.orcamento').val();
    localStorage.setItem('orcamento', valorInputado);
}
$('#pegarOrcamento').on('click', function(){
    var orcamentoInputado, orcamentoReal; 
    orcamentoInputado = $('.orcamento').val();
    orcamentoReal = $('#realOrcamento').text(orcamentoInputado);
	pegarOrcamento();
});

// Editar Orçamento
function editarOrcamento() {
     var orcamentoEditadoReal = $('#realOrcamento').text();
     $('.input-edit').val(orcamentoEditadoReal);
}
$('#editOrcamento').on('click', function(){
     editarOrcamento();
});

// Pegar Novo Orçamento
function pegarNovoOrcamento() {
    var valorOrcamento, novoValorOrcamento;
    valorOrcamento = localStorage.getItem('input-edit');
    novoValorOrcamento = $('.input-edit').val();
    localStorage.setItem('orcamento', novoValorOrcamento);
}

// Salvar edição do Orçamento
function salvarEdit() {
     var orcamentoEditado = $('.input-edit').val();
     $('.real').text(orcamentoEditado);
}

$('.btn-editar').on('click', function(){
     salvarEdit();
     pegarNovoOrcamento();
});

// Salvar Informações Gerais
function infoGeneral() {
     var orcamentoCalculado = $('#realOrcamento').text();
     $('#valorLista').val(orcamentoCalculado);
}

$('.btn-save-lista').on('click', function(){
     infoGeneral();
});

// Salvar Informações Gerais na lista
function infoGeneralLista() {
     var valorLista = $('#valorLista').val();
     $('#realListas').text(valorLista);
}

$('.btn-listaSalvar').on('click', function(){
     infoGeneralLista();
});

// Savar Produtos
function salvarProdutos() {
    
    $('.body-bottom ul li.lista-compra').each(function(){
        var produto = $(this);
        var nomeProduto = produto.find('.input-lista').val();
        var qtdProduto = produto.find('.input-qtd').val();
        var valorProduto = produto.find('.input-item').val();
        salvarProduto({
            nomeProduto: nomeProduto,
            qtdProduto: qtdProduto,
            valorProduto: valorProduto
        });
    });

}

$('.btn-save-lista').on('click', function(){
     salvarProdutos();
});
