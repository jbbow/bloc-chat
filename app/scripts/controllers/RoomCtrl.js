    
(function() {
    function RoomCtrl(Room, $uibModal) {
        this.allRooms = Room.all;
        
        var $ctrl = this;
        
        $ctrl.openModal = function () {
            var modalInstance = $uibModal.open({
              templateUrl: '/templates/roomModal.html',
              controller: 'ModalInstanceCtrl',
              controllerAs: 'modal',
              resolve: {
                
              }
            });

            modalInstance.result.then(function(newRoom) {
              
            });
          };

    }

angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', '$uibModal', RoomCtrl]);
})();
