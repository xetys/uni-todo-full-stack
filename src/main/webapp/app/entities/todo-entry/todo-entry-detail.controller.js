(function() {
    'use strict';

    angular
        .module('todoApp')
        .controller('TodoEntryDetailController', TodoEntryDetailController);

    TodoEntryDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'TodoEntry'];

    function TodoEntryDetailController($scope, $rootScope, $stateParams, entity, TodoEntry) {
        var vm = this;
        vm.todoEntry = entity;
        
        var unsubscribe = $rootScope.$on('todoApp:todoEntryUpdate', function(event, result) {
            vm.todoEntry = result;
        });
        $scope.$on('$destroy', unsubscribe);

    }
})();
