app.factory("song-storage" , function($q, $http) {

  function getSongList() {

    return $q(function(resolve, reject) {

      $http.get('https://vivid-heat-717.firebaseio.com')
      .success(
        function(objectFromJSONFile) {
        resolve(objectFromJSONFile.songs);
      }, function(error) {
          reject(error);
      });
    });
  }

  return getSongList();
});
// app.factory("song-storage" , function($scope, $q, $firebaseObject) {

//   function getSongs() {

//     return $q(function(resolve, reject) {
//       var ref = new Firebase("https://vivid-heat-717.firebaseio.com");
//       var syncObject = $firebaseObject(ref);
//       syncObject.$bindTo($scope, "data");

//       //$scope.messages = $firebaseArray(ref);


//       $scope.data.$loaded()
//         .then(function() {
//           console.log($scope.data);
//         })
//         .catch(function(err) {
//           console.error(err);
//         });
//     });
//   }

//   return getSongs();

// });

// ref.on("value", function(snapshot) {
//   // This isn't going to show up in the DOM immediately, because
//   // Angular does not know we have changed this in memory.
//   // $scope.data = snapshot.val();
//   // To fix this, we can use $scope.$apply() to notify Angular that a change occurred.
//   $scope.$apply(function() {
//     $scope.data = snapshot.val();
//   });
// });

