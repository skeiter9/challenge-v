import angular from 'angular';
import app from './boot/app.js';

{
    window.addEventListener('load', () => {
        angular.bootstrap(document.body, [app.name]);
    });
}

