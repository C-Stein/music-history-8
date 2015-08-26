app.controller("SongCtrl", function($scope, $q) {

  $scope.songs = [];
  
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

  $scope.songs = [];

  function getSongsList() {
    return $q(function(resolve, reject) {

      $.ajax({
        url: "./data/allSongs.json"
      })
      .done(function(response){
        resolve(response.songs);
      })
      .fail(function(xhr, status, error) {
        reject(error);
      });
    });
  }

    getSongsList()
    .then(function(songs){
      $scope.songs = songs;
    }, function(error){
      console.log(error);
    })

  
});