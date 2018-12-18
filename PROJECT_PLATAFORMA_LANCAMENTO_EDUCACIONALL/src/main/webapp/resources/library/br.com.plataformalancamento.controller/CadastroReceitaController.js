/**
 * Responsavel por Manter o módulo de Receita.
 */
var manterLancamentoReceitaModule = angular.module('manterLancamentoReceitaModule',[]);

// Instancia o controller da Aplicacao no Modulo de receitas
manterLancamentoReceitaModule.controller("manterLancamentoReceitaController", function($scope) {
    
    $scope.receitaList = [
        {codigo: 1, origemReceita: 'Indra Politec Company', dataRecebimento: '05/12/2018', tipoReceita: 'Salário Líquido Mensal (Composição)', categoriaReceita: 'Salário Bruto Mensal', valorItemReceita: 'R$ 3.800,00', valorExtrato: 'R$ 3.800,00', contaPagamentoReceita: 'Banco Santander', },
        {codigo: 2, origemReceita: 'Léia Rodrigues Silva', dataRecebimento: '24/12/2018', tipoReceita: 'Retorno de Empréstimos', categoriaReceita: 'Devolução de Empréstimo', valorItemReceita: 'R$ 1.000,00', valorExtrato: 'R$ 2.800,00', contaPagamentoReceita: 'Banco Caixa Econômica Federal'},
        {codigo: 3, origemReceita: 'Basis Tecnologia da Informação', dataRecebimento: '15/11/2018', tipoReceita: 'Recisão Contratual', categoriaReceita: 'Recisão de Contrato de Trabalho', valorItemReceita: 'R$ 1.000,00', valorExtrato: 'R$ 5.000,00', contaPagamentoReceita: 'Banco Santader'},
        {codigo: 4, origemReceita: 'Caixa Econômica Federal', dataRecebimento: '20/01/2019', tipoReceita: 'Retorno de Investimentos', categoriaReceita: 'Devolução de Empréstimo', valorItemReceita: 'R$ 1.000,00', valorExtrato: 'R$ 2.000.000,00', contaPagamentoReceita: 'Banco Caixa Econômica Federal'}
    ];

    // Responsavel por inserir dados na lista
    $scope.cadastrarReceita = function(manterLancamentoReceitaParametro) {
        console.log(manterLancamentoReceitaParametro);
        $scope.receitaList.push($scope.manterLancamentoReceitaParametro);
    }

    // Resposavel por Selecionar dados para a Edicao no datatable
    $scope.selecionarDadosEdicao = function(manterLancamentoReceitaParametro) {
        $scope.receitaListResult = manterLancamentoReceitaParametro;
    }

    $scope.clearReceitaList = function() {
        $scope.receitaList = "";
    }

    //Save
    $scope.save = function() {
        $scope.receitaList.push($scope.receitaListResult);
        // $scope.clearReceitaList();
    }

    console.log($scope.receitaList.length);

    // Remove items do array de Receitas
    // Essa function() esta com erro, pois ao excluir o primeiro elemento do array o 'splice' remove TODOS os itens. Verificar.
    $scope.delete = function(manterLancamentoReceitaParametro) {
        console.log($scope.receitaList.indexOf());
        $scope.receitaList.splice($scope.receitaList.indexOf($scope.receitaListResult));
        console.log($scope.receitaList.length);
        // $scope.clearReceitaList();
    }

});