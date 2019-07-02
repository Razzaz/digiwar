var app_firebase = {};
(function(){
  var firebaseConfig = {
    apiKey: "AIzaSyAISMs217Hfy1KlnN-2yTV-DN0zkWSO0s8",
    authDomain: "digiwar-beta.firebaseapp.com",
    databaseURL: "https://digiwar-beta.firebaseio.com",
    projectId: "digiwar-beta",
    storageBucket: "digiwar-beta.appspot.com",
    messagingSenderId: "929993774227",
    appId: "1:929993774227:web:4a075486cbd27305"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  app_firebase = firebase;
})()
