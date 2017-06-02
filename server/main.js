import {Meteor}  from 'meteor/meteor';
import {Players} from './../imports/api/players';

//Meteor.startup( function() {
Meteor.startup( () => {

});

//Object Spread Operator
let user ={
	age:0,
	name:'Andrew',
	location:'Philadelphia'
};

let person = {
	...user,
	age:25
};

//console.log(person)
//Object property shorthand
let bike='Scott';
let stuffs= {
//	bike:bike,
	bike,
	...user,
	laptopp:'Mac'
};

console.log(stuffs)


