import React, { Component } from "react";
import { GiSpades } from "react-icons/gi";
import { IconContext } from "react-icons";

///a class component in react
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: true
    };
  }

  flipCard = () => {
    this.setState({ flipped: !this.state.flipped });
  };

  isFlippedClass = () => {
    if (this.state.flipped) {
      return "card";
    }
    return "card cardBack";
  };

  toggleFace = () => {
    if (this.state.flipped) {
      return {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        transition: "all 1s ease"
      };
    }
    return { opacity: "0" };
  };

  render() {
    console.log(this.state);
    return (
      <div className="flipContainer">
        <div className={this.isFlippedClass()} onClick={this.flipCard}>
          <div style={this.toggleFace()}>
            <div className="cardValue">{this.props.value}</div>
            <div className="cardSuit">
              <IconContext.Provider value={{ size: "5em" }}>
                <GiSpades />
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
