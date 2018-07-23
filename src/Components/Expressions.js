import React, { Component } from 'react';
import Emotion from "./Emotion"
import Reactions from './Reactions'

var reaction;
class Expressions extends Component {
  state = {
    reaction:null
  }
  update =(i) => {

    if(i){
      console.log("new expression" + i);
    this.setState({
      reaction: i
    });
  }
  }

  render() {
    let emotion;
    if(this.props.expressions){
      emotion = this.props.expressions.map((expression,i) => {
         //console.log(expression);
        return(
          <Emotion key={expression.title} expression={expression} update={this.update} />
        );
      },this);
    }


    return (
      <div className="Expressions">
      <div className="reacts">
      <Reactions reaction={this.state.reaction}/>
      </div>
      <div className="emots">
        {emotion}
      </div>

      </div>
    );
  }
}

export default Expressions;
