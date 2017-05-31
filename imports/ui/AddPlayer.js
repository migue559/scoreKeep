import React from 'react';

import {Players} from './../api/players'

export default class AddPlayer extends React.Component {
	handleSubmit(event){
		let playerName_=event.target.playerName_.value;  //target se refiere al form de html
		event.preventDefault();
		if (playerName_){
			event.target.playerName_.value='';
			Players.insert({ name:playerName_  , score:this.props.score	});
						}
	}
	render(){
		return(
			<div className='item'>
				<form className='form' onSubmit={this.handleSubmit.bind(this)} > 
					<input className='form__input' type='text' name='playerName_' placeholder='Player Name'></input> 
					<botton className='button' >Add Player</botton>
				</form>
			</div>
			);
	}
};
//la parte de bind nos ayuda a capturar el valor de score props.score


