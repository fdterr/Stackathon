import React, { Component } from 'react';
import Innings from './Innings';
import Runners from './Runners';
import Years from './Years';
import Score from './Score';

export default class Calculator extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Innings />
        <br />
        <hr />
        <Score />
        <br />
        <hr />
        <Years />
        <br />
        <hr />
        <Runners />
        <br />
        <hr />
      </div>
    );
  }
}
