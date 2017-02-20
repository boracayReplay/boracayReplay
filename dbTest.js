/**
 * Created by free-lunch on 2017. 2. 19..
 */
/**
 * Created by free-lunch on 2017. 2. 4..
 */

var firebase = require('firebase');

var config = {
  serviceAccount: "./serviceAccount.json",
  databaseURL: "https://boracay-eddc8.firebaseio.com",
};

var app = firebase.initializeApp(config);

function insertItem(data) {
  var newPostKey = firebase.database().ref().child('items').push().key;

  firebase.database().ref('items/' + newPostKey).set(data, function () {
    console.log('on complete');
    app.delete();
  });

}

var data = {
  "title": "가족끼리 왜 이래 - 신년특집 2015 가족백서 1/1",
  "created_at" : firebase.database.ServerValue.TIMESTAMP,
  "view_count" : 0,
  "links" : {
    "dailymotion" : "http://www.dailymotion.com/embed/video/k7sqolCvrPLkXQ9KVKq?syndication=212325&"
  }
};

insertItem(data)



