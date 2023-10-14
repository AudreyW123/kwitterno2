const firebaseConfig = {
    apiKey: "AIzaSyCcDrunjOKrMeTZIJHzMj0F_Qfx0TQgxEU",
    authDomain: "kwitter2-10a10.firebaseapp.com",
    projectId: "kwitter2-10a10",
    storageBucket: "kwitter2-10a10.appspot.com",
    messagingSenderId: "39760140772",
    appId: "1:39760140772:web:afc85407c57ce0d3784ff1"
  };
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

 } });  }); }
getData();
function send()
{
msg = docment.getElementById("msg").value;
firebase.database().ref(room_name).push({
 name:user_name,
 message: msg,
 like:0
 
});
document.getElementById("msg").value = "";
}
