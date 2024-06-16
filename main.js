"use strict";
//////Task : 1  //INSTALLATIONS
//////Task 2
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName = "Eric";
console.log(`Hello ${personName}, would you like to learn some typescript today?`);
/////Task : 3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let person_Name = "Azhan";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
////Task : 4
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
console.log(`Albert Einstein once said, "A person who never made a mistake never tried anything new"`);
////Task : 5
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famousPerson = "Albert Einstein";
let message = (`${famousPerson} once said, "A person who never made a mistake never tried something new."`);
console.log(message);
////Task 6
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
let myName = "\n\tAzhan Sajjad\t\n";
console.log(myName);
////Task 7 and 8
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log(6 + 2);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
/////Task 9
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favouriteNumber = 4;
console.log(`My favourite number is ${favouriteNumber}.`);
////Task 10
//Adding Comments:
//Subha, 2024-03-6
//This program prints a personal message
let bestFriend = "sana";
console.log(`${bestFriend} is my best friend.`);
//////Task 11
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let friends = ["Aisha", "Rameen", "Kainat"];
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}
/////Task 12
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let Friends = ["Rameen", "Aisha", "Muskan"];
for (let name of Friends) {
    console.log(`Hello ${name}, how are you?`);
}
;
//////Task 13
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items
let transport = ["Audi", "Honda motorcycle", "Honda city"];
transport.map((items) => console.log(`I would like to own a ${items}.`));
/////Task 14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let Guest = ["Hisba", "Araib", "Azhan"];
Guest.map((items) => console.log(`Dear ${items} , you are invited to the dinner.`));
/////Task 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let GuestList = ["Hisba", "Araib", "Azhan", "Aisha"];
let notAttend = "Aisha";
console.log(`${notAttend} is not coming`);
let newGuest = "Kainat";
GuestList[GuestList.indexOf(notAttend)] = newGuest;
GuestList.map((items) => console.log(`Dear ${items} , you are invited to the dinner.`));
//////Task 16   More Guests:
///part 1
//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
let Guests = ["Hisba", "Araib", "Azhan", "Kainat"];
let notcoming = "Araib";
let Newguest = "Sara";
Guests[Guests.indexOf(notcoming)] = Newguest;
console.log(Guests);
Guests.map((items) => console.log(`Dear ${items} , I found a bigger dinner table so i am inviting more people.`));
// // ///part 2   Add one new guest to the beginning of your array.
let guestBeg = "Rameen";
Guests[Guests.unshift(guestBeg)];
console.log(Guests);
// // ///part 3  
//Add one new guest to the middle of your array.
let middleguest = "Wahab";
let middleindex = Guests.length / 3;
Guests.splice(middleindex, 0, middleguest);
console.log(Guests);
// //part 4   Use append() to add one new guest to the end of your list. 
Guests.push("Wahab");
console.log(Guests);
// ///part 5   • Print a new set of invitation messages, one for each person in your list.
Guests.map((items) => console.log(`Hello ${items} , you are invited for the dinner.`));
/////////TASK 17
////Initial list of guests
let guest = ["Rameen", "Hisba", "Araib", "Wahab", "Azhan", "Kainat"];
////Informing that only 2 people can be invited
console.log("Due to limited space, only two people can be invited for dinner.");
////Removing guest 
while (guest.length > 2) {
    const removeGuest = guest.pop();
    console.log(`Sorry ${removeGuest}, you're no longer invited on dinner.`);
}
;
////Printing invitations to the remaining guests
guest.forEach((guest) => {
    console.log(`Dear ${guest} , you are invited for the dinner.`);
});
// ////Removing the name from list
let newList = ["Rameen", "Hisba"];
guest.pop();
guest.pop();
console.log("Final guest list:", newList);
///////////TASK 18
let places = ["India", "China", "America", "Turkey", "Saudia"];
//Print your array in its original order.
console.log("Original order", places);
//Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order:", [...places].sort());
//Show that your array is still in its original order by printing it.
console.log("Original order after sorting :", places);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical Order:", [...places].sort().reverse());
//Show that your array is still in its original order by printing it again.
console.log("Original order after reverse sorting :", places);
//Reverse the order of your list. Print the array to show that its order has changed.
places.reverse();
console.log("Reversed order:", places);
// Reverse the order of your list again. Print the list to show it’s back to its original order.
places.reverse();
console.log("Back to orignal order", places);
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
places.sort();
console.log("Sorted in alphabetical order:", places);
//Sort the array in reverse alphabetical order
places.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", places);
///////TASK 19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let invitations = ["Rameen", "Hisba"];
let invitations_count = invitations.length;
console.log(`${invitations_count} people are invited to the dinner`);
/////TASK 20
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
console.log("List of cities:");
console.log(cities);
//////TASK : 21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let person = { name: "Amna", fname: "female", age: 23 };
console.log(person);
// /////TASK : 22
// //Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//console.log(days{7});
console.log(days[6]);
//////TASK 23
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.
let car = "subaru";
console.log("Is car == 'subaru'? predict true");
console.log(car == 'subaru');
console.log("Is car == 'Honda city'?predict false");
console.log(car == 'Honda city');
console.log("is car != 'subaru'? predict false");
console.log(car != 'subaru');
console.log("Is car == 'SUBARU'? predict false");
console.log(car == 'SUBARU');
console.log("Is car.length ==6? predict true");
console.log(car.length == 6);
console.log("Is car.length !=10?predict true");
console.log(car.length != 10);
console.log("Is 10 > 45? predict false");
console.log(10 > 45);
console.log("Is 3 <= 2? predict false");
console.log(3 <= 2);
console.log("Is 72 > 67? predict true");
console.log(72 > 67);
console.log("Is car == 'subaru' && car.length == 6? predict true");
console.log(car == 'subaru' && car.length == 6);
////////TASK : 24
//Tests for equality and inequality with strings
let name_1 = "Azhan";
let name_2 = "Araib";
let name_3 = "Hisba";
if (name_1 == name_3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
;
if (name_1 != name_3) {
    console.log("names are equal");
}
//Tests using the lower case function
if (name_1 != name_2) {
    console.log("names are equal");
}
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let age_1 = 18;
let age_2 = 22;
if (age_1 == 18) {
    console.log("Eligble for vote"); //equal
}
;
if (age_1 != 22) {
    console.log("Eligble for vote in older category."); //not equal
}
;
if (age_1 <= age_2) {
    console.log("Younger"); //less than
}
;
if (age_2 >= age_1) {
    console.log("older"); //greater than
}
;
//Tests using "and" and "or" operators
if (age_1 == 18 && age_2 == 22) {
    console.log("person is eligble for vote");
}
;
if (age_1 == 18 || age_2 != 22) {
    console.log("person is not eligble for vote");
}
;
//Test whether an item is in a array
let country = ["Pakistan", "India", "japan"];
if (country.includes("Pakistan")) {
    console.log("Pakistan is in country list.");
}
;
//Test whether an item is not in a array
if (!country.includes("America")) {
    console.log("America is not in an array");
}
;
///////TASK : 25
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
let alienColor1 = "Green";
if (alienColor1 === "Green") {
    console.log("You earned 5 points.");
}
;
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
let alienColor2 = "red";
if (alienColor2 === "green") {
    console.log("No output.");
}
;
////////TASK: 26
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
let alien_color = "pink";
if (alien_color === "pink") {
    console.log("Player just earned 5 points for shooting the alien.");
}
else {
    console.log("Player just earned 10 points.");
}
;
//• Write one version of this program that runs the if block and another that runs the else block.
let alienColor = "purple";
if (alienColor === "pink") {
    console.log("Player just earned 5 points for shooting the alien.");
}
else {
    console.log("Player just earned 10 points.");
}
;
/////////TASK : 27
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
let alien_color1 = "green";
if (alien_color1 === "green") {
    console.log("Player just earned 5 points for shooting the alien.");
}
;
//• If the alien is yellow, print a message that the player earned 10 points.
let alien_color2 = "yellow";
if (alien_color2 === "yellow") {
    console.log("Player just earned 10 points for shooting the alien.");
}
;
//• If the alien is red, print a message that the player earned 15 points.
let alien_color3 = "red";
if (alien_color3 === "red") {
    console.log("Player just earned 15 points for shooting the alien.");
}
;
//////////////TASK : 28
//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
let person_age = 18;
if (person_age < 2) { //• If the person is less than 2 years old
    console.log("You is a baby.");
}
else if (person_age < 4) { //• If the person is at least 2 years old but less than 4
    console.log("You are a toddler.");
}
else if (person_age < 13) { //• If the person is at least 4 years old but less than 13
    console.log("You are a kid.");
}
else if (person_age < 20) { //• If the person is at least 13 years old but less than 20
    console.log("You are a teenager.");
}
else if (person_age < 65) { //• If the person is at least 20 years old but less than 65
    console.log("You are a adult.");
}
else { //• If the person is age 65 or older
    console.log("You are older.");
}
;
/////////TASK : 29
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits = ["Apple", "orange", "Mango", "melon", "peach"];
if (favorite_fruits.includes("Apple")) {
    console.log("Apple");
}
if (favorite_fruits.includes("peach")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("orange")) {
    console.log("orange");
}
if (favorite_fruits.includes("melon")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("Mango")) {
    console.log("Mango");
}
;
////////////TASK : 30
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let users = ["Admin", "Eric", "Nick", "Harry", "George"];
for (let user of users) {
    if (user === "Admin") {
        console.log("Hello Admin,would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user},thank you for logging in again`);
    }
}
;
//////TASK : 31
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
let username = ["Admin", "Harry", "Nick", "Eric", "George"];
if (username.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let user of username) {
        if (user === "Admin") {
            console.log("Hello Admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${user}, thank you for logging in again.`);
        }
    }
}
//• Remove all of the usernames from your array, and make sure the correct message is printed.
username = [];
if (username.length === 0) {
    console.log("We need to find some users!");
}
;
///////TASK : 32
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["Admin", "Eric", "Hamza", "Araib", "Azhan"];
let new_users = ["Admin", "Araib", "Arham", "Zubair", "Hadi"];
let current_users_lower = current_users.map(user => user.toLowerCase());
for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`Sorry, ${new_user},that name is taken.`);
    }
    else {
        console.log(`Yes, ${new_user} is still available in list.`);
    }
}
;
////TASK : 33
//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.
//• Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of num) {
    if (number === 1) {
        console.log(`${number}st`);
    }
    else if (number === 2) {
        console.log(`${number}nd`);
    }
    else if (number === 3) {
        console.log(`${number}rd`);
    }
    else {
        console.log(`${number}th`);
    }
}
;
///////////TASK : 34
//Pizzas: Think of at least three kinds of your favorite pizza.
// Store these pizza names in a array, and then use a for loop to print the name of each pizza.
let pizza = ["Chicken", "Pepperoni", "Veg"];
for (let pizzas of pizza) {
    console.log(pizzas);
}
console.log("\n");
for (let flavour of pizza) {
    console.log(`I really like ${flavour}.`);
}
;
console.log("\nHow much you like pizza?");
////////TASK : 35
//Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
//• Modify your program to print a statement about each animal, such as A dog would make a great pet.
//• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animal = ["dog", "cat", "lion"];
for (let animals of animal) {
    console.log(animals);
}
;
for (let animals of animal) {
    console.log(`A ${animals} has a tail.`);
}
;
console.log("\nAll of these are great pets! But i love cats more");
//////////TASK : 36
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, text) {
    console.log(`You order a ${size} shirt that says ${text}.`);
}
make_shirt('large', '"i need a big shirt"');
///////////TASK : 37
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt(size = 'Large', text = 'I love typescript') {
    console.log(`You order a ${size} shirt that says ${text}.`);
}
makeShirt();
makeShirt('medium');
//different message
makeShirt('small', 'I need a big shirt to wear');
////////////TASK : 38
//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country = 'pakistan') {
    console.log(`${city} is in ${country}.`);
}
describe_city('Karachi'); //default sentence
describe_city('France', 'New york');
describe_city('Lahore', 'Punjab');
/////////TASK : 39
//City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return `${city},${country}`;
}
let c1 = city_country('Lahore', 'Pakistan');
let c2 = city_country('Paris', 'France');
let c3 = city_country('Tokyo', 'Japan');
console.log(c1);
console.log(c2);
console.log(c3);
//////////TASK : 40
//Album: Write a function called make_album() that builds a Object describing a music album. 
// function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
//Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, title) {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
let album = make_album('ali', 'light');
console.log(album);
album = make_album('asim', 'red wave');
console.log(album);
album = make_album('hamza', 'seenbreez');
console.log(album);
/////TASK : 41
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician = ["ali", "hamza", "asim"];
show_magicians(magician);
/////////TASK : 42
// Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
function make_great(magician) {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = magician[i] + ' ' + 'The great';
    }
}
const magicians2 = ["ali", "hamza", "asim"];
make_great(magicians2);
show_magicians(magicians2);
///////TASK : 43
// Unchanged Magicians: Start with your work from Exercise 40.
// Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function make_great2(magicians) {
    const greatMagician = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagician.push(magicians[i] + ' ' + 'The great magician');
    }
    return greatMagician;
}
const magician3 = ["araib", "azhan", "hassan"];
const greatMagician2 = make_great2(magician3);
show_magicians(magician3);
show_magicians(greatMagician2);
/////////TASK : 44
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. 
//Call the function three times, using a different number of arguments each time.
function sandwitches(...items) {
    console.log("Sandwich order:");
    for (let i = 0; i < items.length; i++) {
        console.log(`-${items[i]}`);
    }
}
console.log("\n\t Enjoy your meal!");
console.log('\n');
sandwitches('capsicum', 'chicken', 'tomato');
console.log('\n');
sandwitches('cheese', 'beef', 'club');
console.log('\n');
sandwitches('garlic chicken', 'mayo chicken');
console.log('\n');
function createCar(manufacturer, model, optional) {
    return Object.assign({ manufacturer,
        model }, optional);
}
const my_car = createCar("Toyota", "Corolla", { color: 'silver', year: '2024' });
console.log(my_car);
