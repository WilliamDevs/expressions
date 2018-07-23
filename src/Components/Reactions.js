import React, { Component } from 'react';


class Reactions extends Component {





  render() {
    let   imgsrc = "happy";

    if(this.props.reaction===2){
      console.log("The reaction was 1");
      imgsrc = "elated";
    }else if(this.props.reaction===3){
      console.log("The reaction was 2");
      imgsrc = "envious";
    }else if(this.props.reaction===4){
      console.log("The reaction was 3");
      imgsrc = "disappointed";
    }else if(this.props.reaction===5){
      console.log("The reaction was 4");
        imgsrc = "scared";
    }else if(this.props.reaction===6){
      console.log("The reaction was 0 " + this.props.reaction);
        imgsrc = "amazed";
    }



    return (
      <div className="Reactions">
        <img src={require("./assets/"+imgsrc+".png") } className="choice_reaction"/>
        <div className="emotion_description">
        {imgsrc}
        </div>
      </div>
    );
  }
}

export default Reactions;
