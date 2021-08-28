document.getElementById("displaywel").innerHTML = "Welcome " + localStorage.getItem("User");
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB_yg2VL-mqLmfWQ-p224aAHpiFBNTV2tA",
      authDomain: "p94simar.firebaseapp.com",
      databaseURL: "https://p94simar-default-rtdb.firebaseio.com",
      projectId: "p94simar",
      storageBucket: "p94simar.appspot.com",
      messagingSenderId: "185959574870",
      appId: "1:185959574870:web:73989d500d0517e7d67af7",
      measurementId: "G-Z1GWJK4M2B"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom() {
      var roomName = document.getElementById("RoomName").value;
      firebase.database().ref("/").child(roomName).update({
            Check: "Added Room Name"
      });
      localStorage.setItem("RoomName", roomName);
      window.location = "kwitter_room.html";
}


function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room name : " + Room_names);
                  var htmldata = "";
                  htmldata = htmldata + '<div class="room_name" id='+ Room_names +' onclick="goToChat(this.id)">' + "#" + Room_names + '</div> <hr>';
                  document.getElementById("output").innerHTML += htmldata;

                  //End code
            });
      });
}
getData();

function LogOut(){
      localStorage.removeItem("User");
      window.location= "index.html";
}


function goToChat(roomname){
      window.location= "chat.html";
      localStorage.setItem("room_Name", roomname);
}