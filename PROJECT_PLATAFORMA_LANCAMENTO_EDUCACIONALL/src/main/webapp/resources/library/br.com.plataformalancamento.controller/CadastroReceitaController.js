/**
 * Responsavel por Manter o módulo de Receita.
 */
var manterLancamentoReceitaModule = angular.module('manterLancamentoReceitaModule',[]);

// Instancia o controller da Aplicacao no Modulo de receitas
manterLancamentoReceitaModule.controller("manterLancamentoReceitaController", function($scope) {
    
    $scope.receitaList = [
        {codigo: 1, origemReceita: 'Indra Politec Company', dataRecebimento: '05/12/2018', tipoReceita: 'Salário Líquido Mensal (Composição)', categoriaReceita: 'Salário Bruto Mensal', valorItemReceita: 'R$ 3.800,00', valorExtrato: 'R$ 3.800,00', contaPagamentoReceita: 'Banco Santander', },
        {codigo: 2, origemReceita: 'Léia Rodrigues Silva', dataRecebimento: '20/12/2018', tipoReceita: 'Retorno de Empréstimos', categoriaReceita: 'Devolução de Empréstimo', valorItemReceita: 'R$ 1.000,00', valorExtrato: 'R$ 2.800,00', contaPagamentoReceita: 'Banco Caixa Econômica Federal'}
    ];

    // Resposavel por Selecionar dados para a Edicao no datatable
    $scope.selecionarDadosEdicao = function(manterLancamentoReceitaParametro) {
        $scope.receitaListResult = manterLancamentoReceitaParametro;
    }

    $scope.clearReceitaList = function() {
        // $scope.receitaListResult = "";
    }

    //Save
    $scope.salvarDadosReceita = function() {
        $scope.receitaList.push($scope.receitaListResult);
        // $scope.clearReceitaList();
    }

    //Remove
    $scope.excluirDadosReceita = function() {
        $scope.receitaList.splice($scope.receitaListResult.indexOf($scope.receitaListResult));
        // $scope.clearReceitaList();
    }

});