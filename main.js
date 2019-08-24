function login()
{

    login1()
    firebase.auth().onAuthStateChanged(function(user){
    
        if (user)
            {
                location.replace("dashboard.html")
            }
          
    });
}

var btn1=document.getElementById("submit_button");


function login1(){
    
    var useremail=document.getElementById('emailid').value;
    var userPass=document.getElementById('password').value;
    
   firebase.auth().signInWithEmailAndPassword(useremail,userPass).catch(function(error){
        var errorCode1=error.code;
        var errorMessage1=error.message;
       alert(errorMessage1);
    });
}

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function() {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

function input(id){
    return document.getElementById(id).value;
}

function submit()
{
    var event_name = input("eventname");
    var event_date = input('eventdate');
    var event_loc = input('eventloc');
    var event_details =input('eventdetails');
   write(event_name,event_date,event_loc,event_details); 
}

function write(name,date,loc,details){
    firebase.database().ref('eventdetails/' +name).set({
        eventName:name,
        eventDate:date,
        eventLoc:loc,
        eventDetails:details
    });
    document.getElementById('eventname').value=""; document.getElementById('eventdate').value=""; document.getElementById('eventloc').value=""; document.getElementById('eventdetails').value="";
}
function logout(){
    location.replace("index.html")
    firebase.auth().signOut();
}
function  price()
{
    document.getElementById('container_event').style.display="none";
    document.getElementById('container_price').style.display="block";
    document.getElementById('testcontainer').style.display="none";
}

function update()
{
    document.getElementById('container_event').style.display="block";
    document.getElementById('container_price').style.display="none";
    document.getElementById('testcontainer').style.display="none";
}
function test()
{
    document.getElementById('container_event').style.display="none";
    document.getElementById('container_price').style.display="none"; document.getElementById('testcontainer').style.display="block";
}