var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyALHtOYNaeVpKVYmi0VJR0OrQn85e81VY8",
  databaseURL: "https://boracay-eddc8.firebaseio.com",
  projectId: "boracay-eddc8",
};

var app = firebase.initializeApp(config);

//const preObject = document.getElementById('item');
//const ullist = document.getElementById('list');

const dbRefObject = firebase.database().ref().child('broad-real');
const dbRefList = dbRefObject.child('KBS');

var preObject = 0;

var getItem = function(){
 dbRefObject.on('value', snap => {
     preObject = JSON.stringify(snap.val(),null, 3);
 })
};

getItem();

console.log(preObject);
/*
 dbRefList.on('child_added', snap => {
   const fourthText = document.createTextNode(snap.key);
   const li = document.createElement('li');
   const alist = document.createElement('a');
   ullist.appendChild(li).appendChild(alist).appendChild(fourthText);
   alist.id = snap.key;
   alist.href = snap.val()}
 }
*/
