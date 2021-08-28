function login_button(){
    localStorage.setItem("User", document.getElementById("Usname").value)
    window.location= "kwitter_room.html";
}