import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
//mongo
import {Players} from './../imports/api/players';
//components
import App         from './../imports/ui/App';



Meteor.startup(    	() => {
	Tracker.autorun(() => {
		let players=Players.find({},{
			sort:{score:-1}
		}).fetch();
		let title = 'Score Keep';
		let score = 5;
		let name = 'Maicol';
		let jsx=(
			<div>
			</div>
			);
	ReactDOM.render(<App title={title} players={players} score={score}/>, document.getElementById('app'));
	});
});

