(function (angular) {
    'use strict';

    function profile(accountService) {
            
        var $ctrl = this;
        $ctrl.show = false;
        
        var user = localStorage.getItem('admin');
        console.log("this is the user" , user);
        if (user != "null" && user != null){
            $ctrl.show = true;
        }

        $ctrl.logOut = function () {
            var user = firebase.auth().currentUser;
            accountService.logOut(function(){
                localStorage.setItem('admin', null);
                location.href = "/administracion";
            });
        }
    }

    angular.module('admin', ['adminLogin', 'adminIndex', 'adminChat'])
        .component('admin', {
            templateUrl: 'app/Admin/Templates/profile.html',
            $routeConfig: [{
                    path: '/login',
                    name: 'AdminLogin',
                    component: 'adminLogin',
                    useAsDefault: true
                },
                {
                    path: '/lista',
                    name: 'AdminIndex',
                    component: 'adminIndex'
                },
                //{ path: '/nuevo', name: 'Cretate', component: 'cretate' }
            ],
            controller: profile
        })
})(window.angular);