import React from "react";

import { withMouse } from "./withMouse";

class CatWrapped extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <span style={{ position: "absolute", left: mouse.x, top: mouse.y }}>
        CatWrapped
      </span>
    );
  }
}

export default withMouse(CatWrapped);
