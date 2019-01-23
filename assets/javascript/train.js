$(document).ready(function () {
  // Initialize Firebase
console.log ("i am working");
var config = {
  apiKey: "AIzaSyANR_Nz0H9aX_8C2ki-S2TP31yV1b5e5PA",
  authDomain: "AIzaSyCf-BdDKIqZgG8U3MKQoSLtA8zursPd-GU.firebaseapp.com",
  databaseURL: "https://train-schedule-25.firebaseio.com",
  projectId: "train-schedule-25",
  storageBucket: "gs://train-schedule-25.appspot.com",
  };
  
  firebase.initializeApp(config);
  
  // reference the database
  var database = firebase.database();
  
  // console.log(database);
  
  // database.ref().on('value', function(snapshot){
  //   console.log(snapshot.val());
  // });
  
  // database.ref('/newList').push({
  //   name:'eli Train'
  
  // });
  $( "#other" ).click(function() {
    $( "#target" ).click();
  });
  
  // when the submit button is clicked 
  $("#submit").on('click', function(event){
    event.preventDefault();
    var train = $("#trainNameInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var time = $("#startTimeInput").val().trim();
    var frequency = $("#frequencyInput").val().trim();

    // a local storage to keep the information
    var addedTrain = {
      name: train,
      dest:destination,
      fTime:time,
      freq:frequency
    };

  console.log(addedTrain);
  database.ref('list').push(addedTrain);
  });



    //console.log ("submit");

    // provent it to load the page
    //event.preventDefault();
  
    // Global Scope Variables
    // var train = $("#trainNameInput").val().trim();
    // var destination = $("#destinationInput").val().trim();
    // var time =  moment($("#startTimeInput").val(), "hh:mm, HH:mm").format("hh:mm");
    // var frequence = $("#frequencyInput").val().trim();
  
    // // console loggin our variables
    // console.log(train);
    // console.log(destination);
    // console.log(time);
    // console.log(frequence);
  
  
  
  //   // Clear your value on the form
  $("#trainNameInput").val("");
  $("#destinationInput").val("");
  $("#startTimeInput").val("");
  $("#frequencyInput").val("");

    
  //   // checking for integers
  //   if (typeof time === 'number' && typeof frequence === 'number'){
  //     alert("Is a number")
  
  //     $("#startTimeInput").val("");
  //     $("#frequencyInput").val("");
  //   }
  //   else {
  //     alert("Not a number")
  //   }
  
  //   return false;
    
  // });
  
  // var currentTime = moment();
  
  // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
  
   database.ref().on("child_added", function (childSnapshot) {
  //saving the value in variables
  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().dest;
  var trainTime = childSnapshot.val().first;
  var frequency = childSnapshot.val().freq;

   // Log everything that's coming out of snapshot
   console.log(trainName);
   console.log(destination);
   console.log(trainTime);
   console.log(frequency);
   // ---conversions

   var freq = parseInt(frequency);

   var tFrequency = frequency;

    // Time is 3:30 AM
    var firstTrainTime = firstTime;
    //First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(trainTime, "HH:mm").subtract(1, "years");
    console.log("HERE: "+firstTimeConverted);
  //current time
  var currentTime = moment();
   console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
   // Difference between the times
   var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
   console.log("DIFFERENCE IN TIME: " + diffTime);
  // Time apart (remainder)
  var tRemainder = diffTime % tFrequency;
  console.log(tRemainder);
   // Minute Until Train
   var tMinutesTillTrain = tFrequency - tRemainder;
   console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm a"));
   
    // Add each train's data into the table
 $("table > tbody").append("<tr><td>" + dTrainName + "</td><td>" + dDestination + "</td><td>" +
 dFrequency + "</td><td>" + moment(nextTrain).format("hh:mm a") + "</td><td>" + tMinutesTillTrain + "</td></tr>");

 

});

  //   var tMinutesTillTrain = frequency - tRemainder;
  //   console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
  
  //   var nextTrain = moment().add(tMinutesTillTrain, "minutes");
  //   console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
  
  
  //   var row = $("<tr>");
  //   row.append($("<td>" + trainName + "</td>"))
  //   row.append($("<td>" + destination + "</td>"))
  //   row.append($("<td>" + frequency + "</td>"))
  //   row.append($("<td>" + moment(nextTrain).format("hh:mm") + "</td>"))
  //   row.append($("<td>" + tMinutesTillTrain + "<td>"))

   // <tr>
   // <td>Jill</td>
   // <td>Smith</td> 
  //<td>50</td>
 // </tr>
  
  //  $("#trainRows").append(row);
  //});

  //myFunction(alert('add train name'));
//$(document).ready(function () {

          //other stuff
//});

  
  // database.ref().on('child_added', function(childSnapshot){
  
  //   // console log
  //   console.log(childSnapshot.val());
  //   // console.log(currentTime._d);
  //   // console.log("current time: " + moment(currentTime).format("hh:mm a"));
  
  //   var Newname = childSnapshot.val().name;
  //   var Newdestination = childSnapshot.val().dest;
  //   var firstTime = childSnapshot.val().first;
  //   var tFrequency = childSnapshot.val().freq;
  
  //   // Log everything that's coming out of snapshot
  //   console.log(childSnapshot.val().name);
  //   console.log(childSnapshot.val().dest);
  //   console.log(childSnapshot.val().first);
  //   console.log(childSnapshot.val().freq);
  
  //   console.log(tFrequency);
  
  //   // // Assumptions
  //   // var tFrequency = 3;
  
  //   // // Time is 3:30 AM
  //   // var firstTime = "03:30";
  
  //   // First Time (pushed back 1 year to make sure it comes before current time)
  //   var firstTimeConverted = moment(firstTime).format("HH:mm");
  
  //   var fTime = firstTimeConverted._i;
  
  //   console.log(firstTimeConverted);
  
  //   // Current Time
  //   var currentTime = moment();
  //   console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
  
  //   // Difference between the times
  //   var diffTime = moment().diff(moment(fTime), "minutes");
  //   console.log("DIFFERENCE IN TIME: " + diffTime);
  
  //   // Time apart (remainder)
  //   var tRemainder = diffTime % tFrequency;
  //   console.log(tRemainder);
  
  //   // Minute Until Train
  //   var tMinutesTillTrain = tFrequency - tRemainder;
  //   console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
  
  //   // Next Train
  //   var nextTrain = moment().add(tMinutesTillTrain, "mm");
  //   console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
    
    
  
  //   // // adds the real time data to the HTML
  //   $("#trainRows").append("<tr>" + "<td>" + Newname + "</td>" + "<td>" + Newdestination + "</td>" + "<td>" +  tFrequency  +"</td>" + "<td>" + nextTrain + "</td>" + "<td>" + tRemainder + "</td>"+ "</tr>");
         
  
  // });
});