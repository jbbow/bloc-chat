<<<<<<< HEAD
angular
    .module('blocChat', ['ui.router','firebase'])
    .config(config);

 })();
=======
(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
            enabled: true,
            requireBase: false
            });

        $stateProvider
            .state('room', {
                url: '/',
                controller: 'RoomCtrl as rooms',
                templateUrl: '/templates/home.html'
 		             });  
        
    }

    
    angular
        .module('blocChat', ['ui.router', 'firebase'])
        .config(config);
})();
>>>>>>> list-chat-rooms
