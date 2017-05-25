//import someDefaults from './../imports/utils';
//console.log('Log from /client/main.js')
//console.log(someDefaults);

import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players=[{
	_id:'1',  name:'Edgar' ,score:99},{
	_id:'2',  name:'Javier',score:99},{
	_id:'3',  name:'Luis'  ,score:98},{
	_id:'4',  name:'Miguel',score:9}]

const render_players= function(playersList){
	//let numbers=[{val:1},{val:2},{val:3},{val:123}];	
	return   playersList.map(function(player){
		return <p key ={player._id}>{ player.name} has {player.score} point(s).</p>;
	});
};

  Meteor.startup(    function	(){let title = 'Score Keep';
	let name = 'Maicol';
	let jsx=(<div>
				<h1>{ title }</h1>
				<p> Una cadena pitera de { name } ¡</p> 
				<p> segunda cadena pitera</p>
				{ render_players(players) }
			</div>
			);
	ReactDOM.render(jsx, document.getElementById('app'));
});
