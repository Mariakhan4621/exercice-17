// creating a Guest List Array
let guestList = ["Maria","Ayeasha","Areeba","Salman"];

// Making variable for those guest who cant come
let dontCome = guestList[0];

// Print the name of guest who cant come
console.log(dontCome, "Naii Ahh sakti han");

// Add or Remove values from Guest List Array 
guestList.splice(0, 1, "Amirr");

// Message print for Bigger Table
console.log("Good News ! We have Found a Bigger Table of Dinner.");

// Adding a new guest at starting index of array
guestList.unshift("Ali");

// Adding a new guest at ending index of array
guestList.push("Zain");

// Get a middle index of our guest list array
let middleIndex: number = (guestList.length / 2);

// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Salman");

// Print Message of updated List
console.log("Updated List of our Guest");

// Sending a invitation message to our guests one bt one with theirnames
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));

// Inform only two guest can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite only two guest  to dinner with me");
// using while loop to remove guests from the array until only to names remain
while(guestList.length > 2){

 let removeGuest = guestList.pop();
 console.log(`Sorry, ${removeGuest} I cant invite you to dinner`);   
}
// Sending a invitations to the last two guest on the list
console.log(" Invitations to the last 2 Guests");
guestList.forEach(Lasttwo => console.log(`Luckly ${Lasttwo}, you are still invited to dinner`));
// Removing last two Guest from the list
guestList.pop();
guestList.pop();

console.log("Emty list:", guestList);

