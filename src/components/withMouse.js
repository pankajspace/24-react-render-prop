import React from "react";

import { Mouse } from "./Mouse";

// If you really want a HOC for some reason, you can easily
// create one using a regular component with a render prop!
export const withMouse = (Component) => {
  return class extends React.Component {
    render() {
      return (
        <Mouse
          render={(mouse) => <Component {...this.props} mouse={mouse} />}
        />
      );
    }
  };
};
