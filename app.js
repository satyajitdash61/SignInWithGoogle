let config = {
  apiKey: "AIzaSyAVCZRlZwZMb0HpdYyGQWrX_3hZYBO0W-A",
  authDomain: "auth-e1bc0.firebaseapp.com",
  databaseURL: "https://auth-e1bc0.firebaseio.com",
  projectId: "auth-e1bc0",
  storageBucket: "auth-e1bc0.appspot.com",
  messagingSenderId: "742558815430",
  appId: "1:742558815430:web:e76578bf65d2a4815d73c7",
  measurementId: "G-06JPSJY02T"
};
firebase.initializeApp(config); 

function googleSignIn(){
    // alert("HI");
    let base_provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(base_provider).then(function(result){
        console.log(result);
        console.log("Success.. Google Account Linked")
    }).catch(function(err){
        console.log(err)
        console.log("Failed to do it");
        
    })
}
