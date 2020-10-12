import React from "react";
import { Mouse } from "./Mouse";
import { MouseWithCat } from "./MouseWithCat";
import { Cat } from "./Cat";
import CatWrapped from "./CatWrapped";

export class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  // Defined as an instance method, `this.renderTheCat` always
  // refers to *same* function when we use it in render. This approach helps
  // when we declare Mouse as React.PureComponent
  renderTheCat(mouse) {
    return <Cat mouse={mouse} />;
  }

  render() {
    // code 1
    // return (
    //   <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
    //     <h1>Move the mouse around!</h1>
    //     <p>
    //       The current mouse position is ({this.state.x}, {this.state.y})
    //     </p>
    //   </div>
    // );
    // code 2
    // return (
    //   <>
    //     <h1>Move the mouse around!</h1>
    //     <Mouse />
    //   </>
    // );
    // code 3
    // return (
    //   <div>
    //     <h1>Move the mouse around!</h1>
    //     <MouseWithCat />
    //   </div>
    // );
    // code 4
    // return (
    //   <div>
    //     <span>Move the mouse around!</span>
    //     {/* <Mouse render={(mouse) => <Cat mouse={mouse} />} /> */}
    //     <Mouse render={this.renderTheCat} />
    //   </div>
    // );
    // code 5
    return (
      <div>
        <div>Move the mouse around!</div>
        <CatWrapped />
      </div>
    );
  }
}
