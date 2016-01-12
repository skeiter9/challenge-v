import angular from 'angular';
import uiRouter from 'angular-ui-router';

export default angular.module('wagon.routes', [
  'ui.router'
  ])

  .config(['$stateProvider', function($sP) {
  
    $sP

    .state('home', {
      url: '',
      template: require('../home/templates/home.jade')()
    })

    .state('vehicles', {
      url: 'vehicles'
    })

    .state('signUp', {
      url: 'sign-up'
    });

  }]);

