function logout()

{

    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter.html";
}

function send()

{

    msg =document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value ="";
}

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

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name")