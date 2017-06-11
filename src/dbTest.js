import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyALHtOYNaeVpKVYmi0VJR0OrQn85e81VY8",
    authDomain: "boracay-eddc8.firebaseapp.com",
    databaseURL: "https://boracay-eddc8.firebaseio.com",
    projectId: "boracay-eddc8",
    storageBucket: "boracay-eddc8.appspot.com",
    messagingSenderId: "270618019752"
};

firebase.initializeApp(config);

const getFbDb = firebase.database().ref().child('broad-real').once('value').then(function(snapshot) {
    var username = snapshot.val();
    console.log(username['KBS']['KBS1']['myK']);
  }).catch(e =>{
  console.log(e);
});

//console.log(fbData);
