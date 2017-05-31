import {Meteor}  from 'meteor/meteor';
import {Players} from './../imports/api/players';

//Meteor.startup( function() {
Meteor.startup( () => {
	class Person {
		constructor(name='anonimo', age=0){//     default name anonimo
			this.name =name;
			this.age =age;
		}
		getGreetings(){
	      //return 'Hola yo soy la pistola '+this.name+' .';
    		return `Hola yo soy la pistola ${this.name}.`;
		}
		getDescription(){
	      //return 'Hola yo soy la pistola '+this.name+' .';
    		return `${this.name} tiene ${this.age} anios de edad, loco!.`;
		}
	}

	class Employe extends Person{
		constructor(name,age,title){
			super(name,age);// se arega super para extender a la clase las propiedades de nombre y edad
			this.title=title;
		}
		getGreetings(){
			if (this.title){
				return `Hola yo soy la pistola ${this.name} y trabajo como ${this.title}`
			} else {
				return super.getGreetings();   // llama a la funcion gretings de la clase person (super action)
			}
		}
		hasJob(){
		}
	}

	class Programmer extends Person{
		constructor (name,age,preferedLanguage='assambley'){
		super(name, age);
		this.preferedLanguage=preferedLanguage;
		}	
		getGreetings(){
			if (this.preferedLanguage) {
				return `Hola  yo soy ${this.name} y Yo soy un ${this.preferedLanguage} Programmer`;
			}else {
				return super.getGreetings();
			}
		}
	}

	let me =new Employe('Miguel',29,'developer');
	console.log(me.getGreetings());

	let person=new Employe('Emire', 29)
	console.log(person.getDescription())
	console.log(person.getGreetings())

	let program= new Programmer('Miguel', 29,'python')
	console.log(program.getGreetings())
});