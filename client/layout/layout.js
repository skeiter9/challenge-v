import angular from 'angular';

//require('./styles/home.css');

export default angular.module('wagonlayout', [])

  .service('layout', [function() {
    this.title = 'wagon';
  }])

  .controller('LayoutController', ['layout', function(l) {
    this.data = l;
  }]);
