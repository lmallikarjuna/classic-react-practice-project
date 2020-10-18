import React, { Component, useState } from "react";

// export default ({ children }) => {
//   const [hovering, setHovering] = useState(false);

//   const mouseOver = () => {
//     setHover(true);
//   }

//   const mouseOut = () => {
//     setHover(false);
//   }

//   return (
//     <div onMouseOver={mouseOver} onMouseOut={mouseOut}>
//       {children(hovering)}
//   </div>

//   )
// }

export default class WithHover extends React.Component {
  state = {
    hovering: false,
  };
  mouseOver = () => {
    this.setState({
      hovering: true,
    });
  };
  mouseOut = () => {
    this.setState({
      hovering: false,
    });
  };
  render() {
    return (
      <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        {this.props.children(this.state.hovering)}
      </div>
    );
  }
}
