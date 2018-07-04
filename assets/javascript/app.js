  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDGLOxS3VL4qqygEOvDz62ZW6GnpDJh_rE",
    authDomain: "rps-multiplayer-7548d.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-7548d.firebaseio.com",
    projectId: "rps-multiplayer-7548d",
    storageBucket: "",
    messagingSenderId: "255442079736"
  };
  firebase.initializeApp(config);

// Create a variable to reference the database
db = firebase.database();

// At the initial load, get a snapshot of the current data.
// db.ref().on("child_added", function(snapshot) {
//   var snapObj = snapshot.val();
//
//   console.log(snapObj);
//
//   $('#player1').html(snapObj.player);
//   $('#player2').html(snapObj.player);
//
// });



