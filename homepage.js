import { add } from "./utils.js";

const e = React.createElement;

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(add(1, 2));

    let el = e("h2", null, "history!", e("span", null, "a"));
    console.log(el);
    return e(
      "div",
      { className: "col-8 m-auto" },
      "",
      e("h1", { className: "text" }, "react without npm and webpack"),
      e(
        "p",
        { className: "text-center" },
        " Hello Worlds of React and Webpack!"
      ),
      e("a", { href: "dynamic.html" }, "dynamic"),
      e("hr", null),
      e("p", { className: "text-right" }, " made with ❤️ by Vivek Lokhande")
    );
  }
}

const domContainer = document.querySelector("#homepage");
const root = ReactDOM.createRoot(domContainer);
root.render(e(HomePage));
