    
(function() {
    function RoomCtrl(Room, Message, $uibModal, $cookies) {
        this.allRooms = Room.all;
        this.currentRoom = null;
        this.messages = null;
        this.currentUser = $cookies.get('blocChatCurrentUser');
        
        
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
        //this is a $scope object where the active room will be stored.
        //First we have to have a function to set up the current room.  We pass the argument room
        //and then set currentRoom
        this.setCurrentRoom = function(room){
            this.currentRoom = room;
            this.messages = Message.getByRoomId(room.$id)
            console.log(this.messages);
        }
        
        
        

    }

angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Message', '$uibModal', '$cookies', RoomCtrl]);
})();
