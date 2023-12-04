// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
//global variable 
var currentuser = "";
var currentemail = "";

//check if the user is logged in or out
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    currentuser = user.displayName;
    currentemail = user.email;
    console.log("logged in", currentuser, currentemail);
  } else {
    console.log("user is logged out");
    window.location.href = "login.html";
  }

});

// save the data
$(".sampleSurvey input[type='submit']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method




});

// sign out code
$("#signout").click(function () {
  firebase.auth().signOut().then(() => {


  }).catch((error) => {
    console.log(error.message);


  });

})