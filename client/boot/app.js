import angular from 'angular';
import routes from '../routes/routes.js';

require('../layout/styles/layout.css');

export default angular.module('app', [
  routes.name
])

  .directive('wagonSplash', [() => ({
    restrict: 'E',
    template: `
      <img src='static/images/wagon-logo.png' />
    `
  })]);

