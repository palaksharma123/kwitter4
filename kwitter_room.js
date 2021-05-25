var firebaseConfig = {
   apiKey: "AIzaSyCOZT2ayBqmZ-WDFejViqac9mK2MryoXc8",
   authDomain: "kwiter3-project.firebaseapp.com",
   databaseURL: "https://kwiter3-project-default-rtdb.firebaseio.com",
   projectId: "kwiter3-project",
   storageBucket: "kwiter3-project.appspot.com",
   messagingSenderId: "1017827607321",
   appId: "1:1017827607321:web:cc1bc8a6fe4bd234b93b88"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 user_name=localStorage.getItem("user_name");
  document.getElementById("user_welcome").innerHTML="Welcome "+user_name+"!";
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

console.log("room name-"+Room_names);
row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomNames(this.id)'>#"+room_name+"</div><hr><hr>";
document.getElementById("output").innerHTML+=row

   //End code
  
  
   });});}
getData();
function addRoom(){
   room_name=document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
purpose:"adding rooms"
   });
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}

function logout(){
   window.location="index.html";
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
}