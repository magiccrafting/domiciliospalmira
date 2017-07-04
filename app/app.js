(function (angular) {
    'use strict';

    angular.module('app', [
        'ngComponentRouter',
        'firebase',
        'index',
        'navbar',
        'accountService',
        'login',
        'profile'])
    .config(function ($locationProvider) {
        $locationProvider.html5Mode(true);
    })
    .value('$routerRootComponent', 'app')
    .component('app', {
        template: '<ng-outlet></ng-outlet>',
        bindings: { $router: '<' },
        $routeConfig: [
           { path: "/", name: "Index", component: "index", useAsDefault: true },           
           { path: "/misdomicilios/...", name: "Profile", component: "profile" }
           // { path: "/notes/:id", name: "Notes", component: "notes"}
        ]
    });
})(window.angular);