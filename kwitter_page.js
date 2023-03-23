var firebaseConfig = {
    apiKey: "AIzaSyA-j1pcWVe4JXzYNc80HVb4VHpR1ZdWolU",
    authDomain: "prueba-clase-9138b.firebaseapp.com",
    databaseURL: "https://prueba-clase-9138b-default-rtdb.firebaseio.com",
    projectId: "prueba-clase-9138b",
    storageBucket: "prueba-clase-9138b.appspot.com",
    messagingSenderId: "1015496112861",
    appId: "1:1015496112861:web:22dea809fe5cb9f567f934"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_item");
room_name = localStorage.getItem("roomName");

function send(){
    message = document.getElementById("SendMessage").value;
    ebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
  });
  document.getElementById("SendMessage").value = "";
}