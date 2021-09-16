
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

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
	msg=document.getElementById("msg").value;
	firebase.database().ref(room_name).push({
		  names:user_name,
		  messages:msg,
		  likes:0
	});
document.getElementById("msg").value="";

}
  function logout(){
	localStorage.removeItem("user_name");
	localStorage.removeItem("room_name");
	window.location="index.html";
	
	}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
	   firebase_message_id = childKey;
	   message_data = childData;
//Start code
names=message_data['names'];
message=message_data['messages'];
likes=message_data['likes'];
name_with_tag="<h4>"+names+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>" + message + "</h4>";
like_button="<button class='btn btn-warning'id="+firebase_message_id+"value="+likes+"onclick='updateLike(this.id)'>";
span_with_tag= "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ likes +"</span></button><hr>";
row= name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
	} });  }); }
getData();

function updateLike(message_id) {button_id = message_id;
	like = document.getElementById(button_id).value;
	updated_likes = Number(like) + 1;
	firebase.database().ref(room_name).child(message_id).update({ likes : updated_likes }); }

