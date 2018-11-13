import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDataExample } from '../actions/exampleFetchAction';

const list = [{ 1: 'pk' }, { 2: 'mk' }]

export class DisplayExample extends Component {
  componentWillMount() {
    this.props.fetchDataExample();
  }

  render() {
    const displayItems = this.props.example.map(item => (
      <div key={item.id}>
        <h4>{item.title}</h4>
        <p>{item.body}</p>
      </div>
    ))
    console.log('%c render', 'color: red')
    return (
      <div>
        <h4>Data from Redux</h4>
        <p>number of items: {this.props.example.length}</p>
        {displayItems}
      </div>
    )
  }
};

const mapstateToProps = state => ({
  example: state.example.items
})

export default connect(mapstateToProps, { fetchDataExample })(DisplayExample);