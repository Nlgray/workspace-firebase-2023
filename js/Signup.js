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

// save the data
$("#signup-form").submit(function (e) {
  e.preventDefault();
  // get the username(email) and password from the form
  // change the following code
  var username = $('input[name="fullname"]').val();
  var emailaddress = $('input[name ="username"]').val();
  var password = "aaassss111";
  var confirmedpassword = "";
  console.log(username, emailaddress, password, confirmedpassword);
  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(emailaddress, password)
    .then((result) => {
      // Signed in
      let user = result.user;
      user.updateProfile({
        displayName: username

      }).then(() => {
        console.log("update profie successfully")
        console.log(user.displayName, " are signed up");

        var date = "wed, 29 Nov 2023";
        var userinformation = {
          "username": user.displayName,
          "email": emailaddress,
          "signupDate": date,
        };
        var db = firebase.firestore();
        db.collection("usertable").doc(user.displayName).set(userinformation).then(() => {
          console.log("information saved to firestore");
          window.location.href = "login.html";

        });

      });

    })
  .catch(error => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
});