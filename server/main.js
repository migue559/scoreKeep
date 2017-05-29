import {Meteor}  from 'meteor/meteor';
import {Players} from './../imports/api/players';


Meteor.startup( function() {
//	Players.insert({ 	name:'mike',		score:5	});
//	Players.update({    name:'mike'                 }, { $set: { score: 45 } } );
	//console.log(Players.find().fetch());


let squere_1 = function(x){                   //ways to create functios
	return x*x;
};
let squere_2 = (x) => {                       //ways to create functios
	return x*x;
};

let squere_3 = (x) => (x*(x+1));              //ways to create arrow functios

let user ={
	name:'Maicol',
	sayHi: function(){
		console.log("Hola"+" "+this.name)           // this es uado para tomar valores de esta instancia
	},
	sayHi2: ()=>{
		console.log("Hola"+" "+this.name)           // this  es uado NNNOOOOOOO tomar valores de esta instancia
	},
	sayHi3: ()=>{
		console.log(arguments)           // this  es uado NNNOOOOOOO tomar valores de esta instancia
	},
	sayHi4: function () {
		console.log(arguments)           // this  es uado NNNOOOOOOO tomar valores de esta instancia
	}	
}

console.log(squere_1(9));
console.log(squere_2(9));
console.log(squere_3(9));

user.sayHi();
user.sayHi2();
user.sayHi3(45,53);
user.sayHi4(45,53);


});