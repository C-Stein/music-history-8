var app = angular.module("MusicApp", ['firebase', 'ngRoute', 'angular.filter']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/songs', {
        templateUrl: 'partials/song-list.html',
        controller: 'SongCtrl'
      }).
      when('/songs/:songId', {
        templateUrl: 'partials/song-detail.html',
        controller: 'SongDetailCtrl'
      }).
      when('/profile', {
        templateUrl: 'partials/profile.html',
        controller: ''
      }).
      when('/addMusic', {
        templateUrl: 'partials/addMusic.html',
        controller: ''
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);



