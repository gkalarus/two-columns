import React, { Component } from 'react';
import '../styles/App.css';
import FirstColumn from './FirstColumn';
import SecondColumn from './SecondColumn';

class App extends Component {

  state = {
    listOfElements: null,
    thumbnailUrl: null
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=12')
      .then(response => response.json())
      .then(data => {
        this.setState({
          listOfElements: [...data]
        })
      })
  }

  handleClickedItem = (e, id) => {
    e.preventDefault();
    const clickedItem = this.state.listOfElements.filter(item => item.id === id)[0];
    
    this.setState({
      thumbnailUrl: clickedItem.thumbnailUrl
    })
   
  }

  render() {
    return (
      <div className="app">
        <FirstColumn 
          listOfElements={this.state.listOfElements}
          handleClickedItem={this.handleClickedItem}
        />
        <SecondColumn 
          thumbnailUrl={this.state.thumbnailUrl}
        />
      </div>
    );
  }
}

export default App;
