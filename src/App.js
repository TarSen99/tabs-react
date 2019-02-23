import React, { Component } from 'react';
import Tabs from './components/Tabs';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabsArray: [],
    }
  }

  componentDidMount() {
    fetch('https://tarsen99.github.io/tabs-react/data.json')
      .then((response) => response.json())
      .then(data => this.setState({tabsArray: data}));
  }

  render() {
    return (
      <div className="App">
        {
          this.state.tabsArray.map(item => {
            return <Tabs
              key={item.id}
              data={item.tabs}
            />
          })
        }
      </div>
    );
  }
}