app.factory("fb" , function($firebaseObject) {

  return {  
    getSongs: function() {
      var ref = new Firebase("https://vivid-heat-717.firebaseio.com/songs");
      var firebaseObject = $firebaseObject(ref);
      return firebaseObject;
   
    }
  };
});

