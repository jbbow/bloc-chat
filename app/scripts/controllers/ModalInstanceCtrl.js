    
(function() {
    function ModalInstanceCtrl($uibModalInstance) {
        this.ok = function () {
            $uibModalInstance.close();
          };

          this.cancel = function () {
            $uibModalInstance.dismiss('cancel');
          };
    }

angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();