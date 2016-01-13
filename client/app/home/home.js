import angular from 'angular';
import appbarModule from '../components/appbar/appbar.js';
import splashModule from '../components/splash/splash.js';
import vehicleModule from '../components/vehicle/vehicle.js';

require('./styles/home.css');

export default angular.module('wagonHome', [
  appbarModule.name,
  splashModule.name,
  vehicleModule.name
])

  .directive('wagonHomePage', [() => ({
    restrict: 'E',
    template: require('./templates/home.jade')()
  })])

  .directive('wagonSignUp', [() => ({
    restrict: 'E',
    template: require('./templates/sign-up.jade')(),
    controller: ['$state', '$log', function($st, $l) {

      this.send = (form) => {
        if (form.$valid) $st.go('confirm');
        else $l.debug('phone input is wrong');
      };

    }],
    controllerAs: 'signUp'
  })])

  .directive('wagonConfirm', [() => ({
    restrict: 'E',
    template: require('./templates/confirm.jade')(),
    controller: ['$state', '$log', function($st, $l) {

      this.send = (form) => {
        if (form.$valid) $st.go('dashboard');
        else $l.debug('security code is wrong');
      };

    }],
    controllerAs: 'confirm'
  })]);
