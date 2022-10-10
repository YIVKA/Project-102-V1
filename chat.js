const firebaseConfig = {
    apiKey: "AIzaSyAkqdIC0OHkLFKj0n4cN4si26pM_j_c1uY",
    authDomain: "project-100-and-101.firebaseapp.com",
    projectId: "project-100-and-101",
    storageBucket: "project-100-and-101.appspot.com",
    messagingSenderId: "207988097544",
    appId: "1:207988097544:web:4596d60239c2abb0de47bd",
    measurementId: "G-WR7SFXTP07"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);
 
     
    window.location = "chat_room.html";
    */

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



