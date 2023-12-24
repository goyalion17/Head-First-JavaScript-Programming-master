"use strict";

/* const bark = function (dogName, dogWeight) {
  dogWeight > 20
    ? console.log(dogName + " says WOOF WOOF")
    : console.log(dogName + " says woof woof");
};

bark("Mike", 25);
bark("Ann", "20");
 */
var balance = 10500;
var cameraOn = true;
function steal(balance, amount) {
  cameraOn = false;
  if (amount < balance) {
    balance = balance - amount;
  }
  return amount;
  cameraOn = true;
}
var amount = steal(balance, 1250);
alert("Criminal: you stole " + amount + "!");
