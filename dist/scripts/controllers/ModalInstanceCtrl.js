    
(function() {
    function ModalInstanceCtrl(Room, $uibModalInstance, $cookies) {
        // this is inside the modal
        
        // set our ngModel variable to use to store the room name
        this.roomName = '';
        
        this.ok = function () {
            // once a modal is open we have a $uibModalInstance
            // any arguments passed to the close function will be available when resolving the promise
            // in the controller that opened the modal
            $uibModalInstance.close(this.roomName);
          };

        this.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
        
        this.createUsername = function () {
            $cookies.put('blocChatCurrentUser', this.userName);
            $uibModalInstance.close();
        }
    }

angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['Room', '$uibModalInstance', '$cookies', ModalInstanceCtrl]);
})();