import angular from 'angular';
import app from './boot/app.js';
console.log('hey grettings from Peru!');
{
    window.addEventListener('load', () => {
        angular.bootstrap(document.body, [app.name]);
    });
}

