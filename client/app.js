import angular from 'angular';
console.log(angular);

const app = angular.module('app', []);

{
    window.addEventListener('load', () => {
        angular.bootstrap(document.body, ['app']);
    });
}

