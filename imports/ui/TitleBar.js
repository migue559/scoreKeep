import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
	render_Subtitle(){
		if (this.props.subtitle){
			return <h2 className='title-bar--subtitle'> {this.props.subtitle} </h2>;
		}
	}
	render(){
		return(
			<div className='title-bar' >
				<div className='wrapper' >
					<h1> {this.props.title}	</h1>
					{this.render_Subtitle()}
				</div>
			</div>
			);
	}
}


TitleBar.propTypes ={
	title:PropTypes.string.isRequired,
	subtitle:PropTypes.string
};

TitleBar.defaultProps={
  // title: 'Default title'

};

