const firebaseConfig = {
  apiKey: "AIzaSyDnT30VTKNDPBc1k_76Wm1JN2btkXP1w6Y",
  authDomain: "database-202f5.firebaseapp.com",
  projectId: "database-202f5",
  storageBucket: "database-202f5.appspot.com",
  messagingSenderId: "937823630545",
  appId: "1:937823630545:web:a3e3ebf6a72060c35981f0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//for people who need game rank


// save the data
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email = 'test1@gmail.com';
  var password = 'aaassss111';

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((_success) => {
      // Signed in
      // ...
      console.log('login in');
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        myname = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(myname, email, emailVerified);
        window.location.href = 'surveyresult.html';
      }
    })
    .catch((error) => {

      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});

// add  a google login choice here 
$('google').click(function(){
var provider = new firebase.auth.googleAuthProvider();

firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = errorCode;
    var errorMessage = errorMessage;
    console.log("error")
    // The email of the user's account used.
    var email = errorEmail;
    // The firebase.auth.AuthCredential type that was used.
    var credential = errorCredential;
    // ...
  });


});
