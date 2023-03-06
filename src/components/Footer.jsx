import React, { Component } from "react";
class Footer extends Component {
  state = {};

  getYear() {
    let d = new Date();
    let year = d.getFullYear();
    return year;
  }
  render() {
    return (
      <footer>
        <p>Copyright © Pradeeprvs {this.getYear()} </p>
      </footer>
    );
  }
}

export default Footer;
