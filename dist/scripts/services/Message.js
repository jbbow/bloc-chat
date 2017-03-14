(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
      
    var getByRoomId = function (roomId) {
          console.log('roomId',roomId)
        // Filter the messages by their room ID.
          var msgs = ref.orderByChild('roomId').equalTo(roomId);
          return $firebaseArray(msgs);
      }

    return {
      getByRoomId: getByRoomId
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();