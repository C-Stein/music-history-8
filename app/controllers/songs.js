app.controller("SongCtrl", ["$scope", "$q", "$firebaseObject", 
  function($scope, $q, $firebaseObject) {


  var ref = new Firebase("https://vivid-heat-717.firebaseio.com/songs");
   
      

  $scope.songs = $firebaseObject(ref);
  $scope.artists = [];

  console.log($scope.songs);

  
  $scope.addSong = function() {
    $scope.songs.push({"title": $scope.newSongTitle,
                        "artist": $scope.newSongArtist,
                      "album": $scope.newSongAlbum});
    $scope.newSongTitle = "";
    $scope.newSongAlbum = "";
    $scope.newSongArtist = "";
    $scope.songSearchText = "";

  };

  $scope.deleteSong = function(song) {
    var songIndex = $scope.songs.indexOf(song);
    if (songIndex >= 0) {
      $scope.songs.splice(songIndex, 1);
    }
  };
  
}
]);