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
var conn = firebase.database().ref()

export function getItem(key) {
  return conn.child('test').once('value').then(function(snapshot) {
    return snapshot.val();
  });
}


// const getFbDb = conn.child('broad-real').once('value').then(function(snapshot) {
//     var username = snapshot.val();
//     console.log();
//   }).catch(e =>{
//   console.log(e);
// });
//export getItem;

//console.log(fbData);
