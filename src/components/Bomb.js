// Bomb Component Code Goes Here

import React from 'react';
import PropTypes from 'prop-types';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    }


  }

  render(){
    if (this.state.secondsLeft > 0){
      return(
        <p>{this.state.secondsLeft} seconds left before I go boom!</p>
      )
    } else if (this.state.secondsLeft === 0){
      return(
      <p>Boom!</p>
      )
    }
  }
};
