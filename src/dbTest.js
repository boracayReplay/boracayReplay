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

const broadReal = firebase.database().ref().child('broad-real');

broadReal.on('value', snap => (
   console.log(snap.val())));

export const person = 5;
