import React, { Component } from 'react';
import { connect } from 'react-redux';

import Division from './Division';

import { fetchFantasyStandings } from '../../../actions/fantasyActions';

class Standings extends Component {
  componentDidMount() {
    this.props.fetchFantasyStandings('1943495');
  }

  renderDivisions() {
    const { standings } = this.props.fantasy;
    if (!standings) {
      return null;
    }

    return Object.keys(standings).map(division => {
      return (<Division key={Math.random()} division={standings[division]} />)
    })
  }

  render() {
    return (
      <div>
        <h2>Standings</h2>
        <ul>{this.renderDivisions()}</ul>
      </div>
    )
  }
}

function mapStateToProps({ fantasy }) {
  return { fantasy };
}

export default connect(mapStateToProps, { fetchFantasyStandings })(Standings);