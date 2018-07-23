import React, { Component } from 'react';
import Expressions from "./Components/Expressions"
import { Alert } from 'reactstrap';
import './App.css';

class App extends Component {
 constructor(){
   super();
   this.state = {
     expressions : []
   }
 }
 componentWillMount(){
   this.setState({
     expressions: [
       {
       value: 1,
       title : "happy"
       },
       {
       value: 2,
       title : "sad"
       },
       {
       value: 3,
       title : "surprise"
       }
     ]
   });
 }

  render() {
    return (
      <div className="App">
        <Alert className="Title" color="primary"> Combine emotions to create new reactions </Alert>
        <Expressions expressions={this.state.expressions}/>

      </div>
    );
  }
}

export default App;
