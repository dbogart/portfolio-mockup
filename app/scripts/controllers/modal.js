'use strict';


angular.module('portfolioMockupApp').controller('ModalCtrl', function ($scope, $modal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('portfolioMockupApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items, $log, portfolioCreateService) {

    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.groupOptions = [
        { label: 'Marketing' },
        { label: 'Outcomes' },
        { label: 'Pharmco Vigilance'}
    ];

    $scope.ok = function () {
        /***
        * 
        * check and validation logic would go in here
        *
        **/ 
        $log.info('portfolioModalCtrl submitting new portfolio to portfolioCreateService');
        portfolioCreateService.createPortfolio($scope.portName, $scope.selectedGroup.label );

        $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    //radio buttons
    $scope.singleModel = 1;

    $scope.radioModel = 'Middle';

    $scope.checkModel = {
        left: false,
        middle: true,
        right: false
    };

    //dropdown

    $scope.groupModel = 'Selected group';

    $scope.myStyle = {
     background: '#000000'
    };

    $scope.groups = [
        { name: 'Pharmaco Vigilance' },
        { name: 'Marketing' },
        { name: 'Outcomes' }
    ];

    // $scope.selected = function

    $scope.status = {
        isopen: false
    };

    $scope.toggled = function(open) {
        $log.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };

});