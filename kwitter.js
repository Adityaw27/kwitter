const firebaseConfig = {
    apiKey: "AIzaSyBXs_TAk-V7cSW4CXjrfVIDm5UNuDkAHL4",
    authDomain: "kwitter-68e57.firebaseapp.com",
    databaseURL: "https://kwitter-68e57-default-rtdb.firebaseio.com",
    projectId: "kwitter-68e57",
    storageBucket: "kwitter-68e57.appspot.com",
    messagingSenderId: "833718677543",
    appId: "1:833718677543:web:df24511878406990f79e02",
    measurementId: "G-XWNF1P66HV"
  };

  // Initialize Firebas
  firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";

    console.log(user_name)
}
    
  

  