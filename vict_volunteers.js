var victims = [];
var helpers = [];


var numVict = prompt ("How many victims are there?");

for (var i=0; i<numVict; i++) {
  var vicObj = {name:'', number:'', address:''}
  vicObj.name = prompt("Name of victim?");
  vicObj.number = prompt("Victim's phone number?");
  vicObj.address = prompt ("Victim's address?");
  victims.push(vicObj);
}


var numHelpers = prompt ("How many volunteers are there?");

for (var i=0; i<numHelpers; i++) {
  var volObj = {name:'', number:'', address:''}
  volObj.name = prompt("Name of volunteer?");
  volObj.number = prompt("Volunteer's phone number?");
  volObj.address = prompt ("Volunteer's address?");
  helpers.push(volObj);
}

alert("There are " +numVict+ " victims and there are " +numHelpers+ " volunteers and here is their info..")

for (var i = 0; i<numVict; i++) {
  var name = victims[i].name;
  var phone = victims[i].number;
  var address = victims[i].address;
  alert("Victim #" +(i+1)+ '\n Name: ' +name + '\n Phone: ' + phone + '\n Address: ' + address)
}

for (var i = 0; i<numHelpers; i++) {
  var name = helpers[i].name;
  var phone = helpers[i].number;
  var address = helpers[i].address;
  alert("Volunteer #" +(i+1)+ '\n Name: ' +name + '\n Phone: ' + phone + '\n Address: ' + address)
}
