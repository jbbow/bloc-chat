(function() {
    function ModalInstanceCtrl(Room, $uibModalInstance, $cookies) {
        var modal = this;
        modal.cancel = function () {
            $uibModalInstance.dismiss();
        };
        
        modal.createRoom = function () {
            Room.add(modal.roomName);
            $uibModalInstance.close();
        };
        
        modal.createUsername = function () {
            $cookies.put('blocChatCurrentUser', modal.userName);
            $uibModalInstance.close();
        }
    }

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['Room', '$uibModalInstance', '$cookies', ModalInstanceCtrl]);
})();