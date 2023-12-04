const firebaseConfig = {
  apiKey: "AIzaSyDZIAVnBvB-GHlaDDO2GbOFjQhVvleb344",
  authDomain: "database2023test.firebaseapp.com",
  projectId: "database2023test",
  storageBucket: "database2023test.appspot.com",
  messagingSenderId: "352598568614",
  appId: "1:352598568614:web:b1acd2e65514f8050f8e67",
  measurementId: "G-6EF9ZJX352"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  // get the username(email) and password from the form
  // change the following code
  var username = $('input[name ="Fullname"]').val();
  var emailaddress = $('input[name = "username]').val();
var password = "";
var confirmedpassword = "";
console.log(username, emailaddress, password, confirmedpassword);
  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(emailaddress, password)
    .then(user => {
      // Signed in
      let user = result.user;
      user.updateProfile({
displayname: username

      });
      console.log(user.displayname, " are signed up");
      window.location.href = "Login.html";
      
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
  });
