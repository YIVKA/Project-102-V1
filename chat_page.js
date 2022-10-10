 
 const firebaseConfig = {
    apiKey: "AIzaSyAdNCninqO5bMii7XqYTL3PjeAmP-Or1V0",
    authDomain: "kwitter-e2273.firebaseapp.com",
    databaseURL: "https://kwitter-e2273-default-rtdb.firebaseio.com",
    projectId: "kwitter-e2273",
    storageBucket: "kwitter-e2273.appspot.com",
    messagingSenderId: "647268232157",
    appId: "1:647268232157:web:9b252e04898d6c9ca2e434"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 
 function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}


function localStorage()
{
    localStorage.getItem("user_name");
    localStorage.getItem("room_name");
}


function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById(msg).value = "";
}