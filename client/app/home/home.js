import angular from 'angular';
import appbarModule from '../components/appbar/appbar.js';

require('./styles/home.css');

export default angular.module('wagonHome', [
  appbarModule.name
])

  .directive('wagonSplash', [() => ({
    restrict: 'E',
    template: `<img src='static/images/wagon-logo.png' />`
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
        if (form.$valid) $st.go('home');
        else $l.debug('security code is wrong');
      };

    }],
    controllerAs: 'confirm'
  })]);
