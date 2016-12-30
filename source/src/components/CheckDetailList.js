import React from "react";

import CheckDetailItem from "../CheckDetailItem";
import * as MenuItemActions from "../actions/MenuItemActions";
import MenuItemStore from "../stores/MenuItemStore";


export default class Featured extends React.Component {
  constructor() {
    super();
    this.getCheckDetails = this.getCheckDetails.bind(this);
    this.state = {
      CheckDetails: MenuItemStore.getAll(),
    };
  }

  componentWillMount() {
    MenuItemStore.on("change", this.getCheckDetails);
  }

  componentWillUnmount() {
    MenuItemStore.removeListener("change", this.getCheckDetails);
  }

  getCheckDetails() {
    this.setState({
      CheckDetails: MenuItemStore.getAll(),
    });
  }

  reloadTodos() {
    MenuItemStore.reloadTodos();
  }

  render() {
    const { CheckDetails } = this.state;

    const DetailComponents = CheckDetails.map((item) => {
        return <CheckDetailItem key={item.id} {...item}/>;
    });

    return (
      <div>
        <h1>MenuItems</h1>
        <ul>{DetailComponents}</ul>
      </div>
    );
  }
}