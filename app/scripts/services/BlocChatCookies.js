(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
                templateUrl: '/templates/userName.html',
                size: 'sm',
                controller: 'ModalInstanceCtrl as modal',
                keyboard: false,
                backdrop: 'static'
            });
       
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();