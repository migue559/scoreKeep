//import someDefaults from './../imports/utils';
//console.log('Log from /client/main.js')
//console.log(someDefaults);

import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';



//const players=[{
//	_id:'1',  name:'Edgar' ,score:99},{
//	_id:'2',  name:'Javier',score:99},{
//	_id:'3',  name:'Luis'  ,score:98},{
//	_id:'4',  name:'Miguel',score:9}]

//const render_players= function (playersList)  {
const render_players= (playersList) => {
	//let numbers=[{val:1},{val:2},{val:3},{val:123}];	
	//return   playersList.map(function(player)  {
	return   playersList.map((player) => {
		return (
			<p key ={player._id}>
			{ player.name} has {player.score} point(s).
			<button onClick={()=>{
				//alert('deleted')
				Players.update({_id:player._id},{$inc:{score:1}})
			}}> +1 </button>
			<button onClick={()=>{
				//alert('deleted')
				Players.update({_id:player._id},{$inc:{score:-1}})
			}}> -1 </button>
			<button onClick={()=>{
				//alert('deleted')
				Players.remove(player._id)
			}}> X </button>
			</p>
			);
	});
};


//const handleSubmit = function( event )   {
const handleSubmit = ( event ) =>  {
	let playerName_=event.target.playerName_.value;  //target se refiere al form de html
	event.preventDefault();
	if (playerName_){
		event.target.playerName_.value='';
		Players.insert({ 	name:playerName_  ,		score:0	});
					}
				};

//Meteor.startup( function ()  {
Meteor.startup(    	() => {
	// call tracker autorun
	// create variable  call players -> set equals  to fetch query
	// render  players to the screen
	// Tracker.autorun( function()  {
	Tracker.autorun(() => {
		let players=Players.find().fetch();
		let title = 'Score Keep';
		let name = 'Maicol';
		let jsx=(
			<div>
				<h1>{ title }</h1>
				<p> Una cadena pitera de { name } ¡</p> 
				<p> segunda cadena pitera</p>
				{ render_players(players) }
				<form onSubmit={handleSubmit}>
					<input type='text' name='playerName_' placeholder='Player Name'></input> 
					<botton>Add Player</botton>
				</form>
			</div>
			);
	ReactDOM.render(jsx, document.getElementById('app'));
	});
});
//colore