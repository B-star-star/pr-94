
//ADD YOUR FIREBASE LINKS HERE


// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCn327UIznhquYnA_jbd9QrE3_0HFu0AkM",
      authDomain: "kwitter-5d338.firebaseapp.com",
      databaseURL: "https://kwitter-5d338-default-rtdb.firebaseio.com",
      projectId: "kwitter-5d338",
      storageBucket: "kwitter-5d338.appspot.com",
      messagingSenderId: "415951625363",
      appId: "1:415951625363:web:29c5838eb920b608204166"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);


user_name = localStorage.getItem("username");

document.getElementById("user_name").innerHTML = "welcome " + username + "!";

function add_roomname()
{
    room_name=document.getElementById("room_name").value;
    localStorage.setItem(room_name,roomname);
    window.location="index.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
