import React from 'react';
import Tab from './Tab';
import TextField from './TextField';

export default class Tabs extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      activeTitleID: this.props.data[0].id,
    };

    this.handleClick = this.handleClick.bind(this);
    this.getActiveTabContent = this.getActiveTabContent.bind(this);
  }

  handleClick(id) {
    if(this.state.activeTitleID === id) {
      return;
    }

    this.setState({
      activeTitleID: id,
    });
  }

  getActiveTabContent() {
   const {title, content} = this.props.data.find(item => {
      return item.id === this.state.activeTitleID
    });

    console.log(title + '\n' + content);
  }

  render() {
    let ActiveTabContent = this.props.data.find(item => {
      return item.id === this.state.activeTitleID
    }).content;

    return (
      <div className="tabs">
        {this.props.data.map(tab => {
          return <Tab
            key={tab.id}
            isActive={tab.id === this.state.activeTitleID}
            title={tab.title}
            handleClick={() => this.handleClick(tab.id)}
          />
        })}
        <TextField content={ActiveTabContent} />

        <button
          onClick={this.getActiveTabContent}
          className="tabs__button"
        >
          Get active Tab
        </button>
      </div>
    );
  }
}
