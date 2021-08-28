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

function Logout() {
    localStorage.removeItem("User");
    window.location = "index.html";
}
var Room_Name = localStorage.getItem("room_Name");
var username = localStorage.getItem("User");
function send() {
    firebase.database().ref(Room_Name).push({
        name: username,
        message: document.getElementById("msg").value,
        like: 0
    })
}

document.getElementById("Display_RoomName").innerHTML = localStorage.getItem("room_Name");

function getData() {
    firebase.database().ref("/" + Room_Name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
         snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
               name = message_data['name'];
               message = message_data['message'];
               if(name!= "undefined"){
                like = message_data['like'];
                var name_tag = "<h4>" + name + "<img src='tick.png' class='user_tick'> </h4>";
             var message_tag = "<h4 class='message_h4'>" + message + "</h4>";
             like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
             var row = name_tag + message_tag + like_button + span_with_tag;
 
                document.getElementById("output").innerHTML += row;
               }
               
               
                //End code
            }
        });
    });
}
getData();

function updateLike(b_id){
    likes = document.getElementById(b_id).value;
    var updatedlikes = Number(likes) + 1;
    firebase.database().ref(Room_Name).child(b_id).update({
        like: updatedlikes
    })
}
