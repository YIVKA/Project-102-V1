const firebaseConfig = {
    apiKey: "AIzaSyAkqdIC0OHkLFKj0n4cN4si26pM_j_c1uY",
    authDomain: "project-100-and-101.firebaseapp.com",
    databaseURL: "https://project-100-and-101-default-rtdb.firebaseio.com",
    projectId: "project-100-and-101",
    storageBucket: "project-100-and-101.appspot.com",
    messagingSenderId: "207988097544",
    appId: "1:207988097544:web:4596d60239c2abb0de47bd",
    measurementId: "G-WR7SFXTP07"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


  function getData() 
  {
    firebase.database().ref("/").on("value", function(snapshot) {document.getElementById("output").innerHTML.HTML = ""; snapshot.forEach(function(childSnapshot) {childkey = childSnapshot.key;
    Room_names = childKey;
    //start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
    //end code
  })})
  getData();
  }