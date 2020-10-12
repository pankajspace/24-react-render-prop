import React from "react";

export class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <span style={{ position: "absolute", left: mouse.x, top: mouse.y }}>
        Cat
      </span>
    );
  }
}
