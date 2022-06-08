"use strict";

const e2 = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return e2("p", {}, "You liked this.");
    }

    return e2(
      "button",
      { onClick: () => this.setState({ liked: true }) },
      "Like"
    );
  }
}

const domContainer2 = document.querySelector("#like_button_container");
const root2 = ReactDOM.createRoot(domContainer2);
root2.render(e2(LikeButton));
