import React from 'react';
import FlipMove from 'react-flip-move';
import PropTypes from 'prop-types';
import Player from './Player'

export default class PlayerList extends React.Component {
	render_players() {
		if(this.props.players.length === 0){
			return (
				<div className='item'>
				<p className='item__message'> Add you first player to get stared!</p>
				</div>
				);
		} else {
			return   this.props.players.map((player_) => {
			return <Player key={player_._id} player={player_}/>
				});
		}
}
	render(){
		return (
			<div >
				<FlipMove maintainContainerHeight={true}>
				{this.render_players()}
				</FlipMove>

			</div>
			);
	}
};



PlayerList.propTypes ={
	players:PropTypes.array.isRequired
};

