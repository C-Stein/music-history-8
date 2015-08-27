app.controller("SongCtrl", ["$scope", "$q", "song-storage", 
  function($scope, $q, song_storage) {

  $scope.songs = [];
  $scope.artists = [];
  
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
        url: "./data/songs.json"
      })
      .done(function(response){
        resolve(response.songs);
      })
      .fail(function(xhr, status, error) {
        reject(error);
      });
    });
  }

  function getMoreSongs() {
    return $q(function(resolve, reject) {
      $.ajax({
        url: "./data/moreSongs.json"
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
    .then(function(songs1){
      // $scope.songs = songs;
      getMoreSongs()
        .then(function(songs2){
          $scope.songs = songs1.concat(songs2);
        });
    }, function(error){
      console.log(error);
    });

  
}
]);