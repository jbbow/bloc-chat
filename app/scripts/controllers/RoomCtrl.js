    
(function() {
    function RoomCtrl(Room, $uibModal) {
        this.allRooms = Room.all;
        
        // we created a fucntion to open the modal using $uibModals
        this.openModal = function () {
            // we create a variable to hold the promise from $uibModal
            // using the openModal() function will open the modal and then we'll be in the controller and template
            // designated in the params of $uibModal.open()
            var modalInstance = $uibModal.open({
              templateUrl: '/templates/roomModal.html',
              controller: 'ModalInstanceCtrl',
              controllerAs: 'modal'
            });

            
            // resolving the promise from the $uibModal.open() function
            // arguments here come from the close function of the ModalInstanceCtrl
            modalInstance.result.then(function(newRoomName) {
              Room.add(newRoomName)
            });
          };

    }

angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', '$uibModal', RoomCtrl]);
})();
