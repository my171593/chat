
 var firebaseConfig = {
  apiKey: "AIzaSyAIXzN3zPatjGPh2F3FyCbt_tkqKpwEuHw",
  authDomain: "kwitter-78a07.firebaseapp.com",
  databaseURL: "https://kwitter-78a07-default-rtdb.firebaseio.com",
  projectId: "kwitter-78a07",
  storageBucket: "kwitter-78a07.appspot.com",
  messagingSenderId: "351482995095",
  appId: "1:351482995095:web:afac29f9b8e2e95494a4d2",
  measurementId: "G-Z7X64EZCMF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name"); 
console.log(user_name);
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"saidaisawesome"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"<div><hr>";
   document.getElementById("output").innerHTML+=row;
  //End code
  });});}
getData();

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";

}

function redirectToRoomName(name){
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";

}


