import angular from 'angular';

require('./appbar.css');

export default angular.module('wagonAppbar', [])

  .directive('wagonAppbar', [() => ({
    restrict: 'E',
    scope: {
      title: '=',
      hideSearch: '=',
      leftIconFn: '&'
    },
    controller: angular.noop,
    bindToController: true,
    controllerAs: 'appbar',
    template: `
      <section>
        <!--<a class='icon-arrow_back' ng-click='appbar.leftIconFn()'></a>-->
        <a class='icon-menu'></a>
      </section>
      <h1> {{appbar.title | uppercase}} </h1>
      <section>
        <a class='icon-search' ng-hide='appbar.hideSearch'></a>
      </section>

    `
  })]);
