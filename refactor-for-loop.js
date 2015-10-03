/*
* Refactor the for-loop
*
* Goal is to create a list of people objects that are over 21.
*/

// Possible problems
// 1. Code could be more object oriented.
// 2. Temp variables (age) in the global namespace
// 3. Having for-loops can be generally harder to read
var i, person, age; 
var people = [  
  { name: 'Pinky', birthDate: 1986 },
  { name: 'Brain', birthDate: 1995 },
  { name: 'Larry', birthDate: 1997 }
];
var year = 2015;  
var overTwentyone = [];

// Refactor this for-loop
for (i = 0; i < people.length; i++) {  
  person = people[i];
  age = year - person.birthDate;
  person.age = age;
  person.age >= 21 ? overTwentyone.push(person) : '';
}

// PUT REFACTOR CODE BELOW
people = people.map(function(item) {
  var age = year - item.birthDate;
  item.age = age;
	return item;
});

overTwentyone = people.filter(function(item) {
	return item.age >= 21;
});