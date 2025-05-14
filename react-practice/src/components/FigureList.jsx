import { Component } from "react";
import BasicFigures from "./BasicFigures";

class FigureList extends Component {
  render() {
    return (
      <div style={{ display: flex }}>
        <BasicFigures filename='../assets/Lion.jpeg' caption='Doodles' />
        <BasicFigures filename='../assets/react.svg' caption='Doodles' />
      </div>
    );
  }
}
