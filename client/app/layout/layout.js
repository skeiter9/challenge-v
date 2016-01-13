import angular from 'angular';

if (__ENV__ !== 'test') require('./styles/icons.css');

require('./styles/layout.css');

export default angular.module('wagonlayout', [])

  .service('layout', [function() {
    this.title = 'wagon';
  }])

  .controller('LayoutController', ['layout', function(l) {
    this.data = l;
  }]);
