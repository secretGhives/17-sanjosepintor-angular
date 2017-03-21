import componentTpl from './footer.component.html';

let footerComponent = {
  templateUrl: componentTpl,
  controller: FooterController,
  bindings: {}
};

function FooterController($scope, $log, $mdDialog, store) {
  'ngInject';
  //$log.debug('Footer' + ' checking in');
  $scope.phone = store.phone;
  $scope.cities = store.cities;
  $scope.company = store.company;

  $scope.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#universe')))
        .clickOutsideToClose(true)
        .title('This is an alert title')
        .textContent('You can specify some description text in here.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };

}

export default footerComponent;
