// app.controller("SongDetailCtrl", ["$scope", "$routeParams",
//   function($scope, $routeParams) {
//     $scope.selectedSong = {};
//     $scope.songId = $routeParams.songId;
//     console.log($routeParams);
//     console.log("$scope.songId", $scope.songId);



//         $scope.selectedSong = $scope.songs.filter(function(song) {
//           return song.id === parseInt($scope.songId);
//         })[0];

//         console.log("$scope.selectedSong", $scope.selectedSong);
 

//   }
// ]);


app.controller("SongDetailCtrl", ["$scope", "$routeParams", "song-storage",
  function($scope, $routeParams, song_storage) {
    $scope.selectedSong = {};
    $scope.songId = $routeParams.songId;

    console.log("$scope.songId", $scope.songId);

    song_storage.then(
      function(promiseResolutionData) {
        console.log("promiseResolutionData", promiseResolutionData);

        $scope.selectedSong = promiseResolutionData.filter(function(song) {
          return song.id === parseInt($scope.songId);
        })[0];

        console.log("$scope.selectedSong", $scope.selectedSong);
      },
      function(promiseRejectionError) {
        console.log("error", promiseRejectionError);
      }
    );
  }
]);