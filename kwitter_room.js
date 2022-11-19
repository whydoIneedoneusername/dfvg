var firebaseConfig = {
    apiKey: "AIzaSyDzLnLUCUldTOsI-VFWLzSFwJShczr_yps",
    authDomain: "kwitter-5393e.firebaseapp.com",
    databaseURL: "https://kwitter-5393e-default-rtdb.firebaseio.com",
    projectId: "kwitter-5393e",
    storageBucket: "kwitter-5393e.appspot.com",
    messagingSenderId: "1023714993718",
    appId: "1:1023714993718:web:54cc79c495db940b859a97"
  };
  
firebase.initializeApp(firebaseConfig);


function addRoom()

{

room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({

      purpose :"adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";


}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}


function getData() 

{firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - "+ Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id' >8"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function logout()

{

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");

window.location="kwitter.html";
}