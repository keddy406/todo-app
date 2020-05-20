import firebase from 'firebase';

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyBGOG77wJn9vU6OZSrC5hV33Ec-ZRapfDk",
    authDomain: "todo-app-23e6d.firebaseapp.com",
    databaseURL: "https://todo-app-23e6d.firebaseio.com",
    projectId: "todo-app-23e6d",
    storageBucket: "todo-app-23e6d.appspot.com",
    messagingSenderId: "375844798121",
    appId: "1:375844798121:web:2e66d10b6806078694f3b8"
  });    

  const db = firebaseApp.firestore();

  export default db;