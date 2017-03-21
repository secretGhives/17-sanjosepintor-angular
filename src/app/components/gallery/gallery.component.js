import componentTpl from './gallery.component.html';

let galleryComponent = {
  templateUrl: componentTpl,
  controller: GalleryController,
  bindings: {}
};

function GalleryController($scope, $log, store) {
  'ngInject';
  //$log.debug('Hello from' + 'Gallery' + 'Controller (component)!');
  $scope.email = store.email;
}

export default galleryComponent;
