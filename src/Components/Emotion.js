import React, { Component } from 'react';
import { Button } from 'reactstrap';


var emot = [];
class Emotion extends Component {



  getValue = () => {
    emot.push( [this.props.expression.value]);
    this.setState({ value: this.props.expression.value});
    console.log(this.props.expression.value +  " " + emot.toString());
    if(emot.length===2){
      const combined_emotion = parseInt(emot[0]) +  parseInt(emot[1]);
      console.log("The array length is 2 " + emot[1] + " " + combined_emotion );
      emot = [];
      this.props.update(combined_emotion);
    }

  }

  render() {
    //console.log(this.props.expression.value + this.props.expression.value)

    return (
      <div className="Emotion">
        <img onClick={this.getValue} src={require("./assets/"+this.props.expression.title+".png")}  className="emotion_choice"/>
        <br></br>
        <div color="primary" onClick={this.getValue} className="emotion_description" >{this.props.expression.title}</div>

      </div>

    );
  }
}

export default Emotion;
