import React, { Component } from "react"

class HeaderItem extends Component {
  state = { itemName: this.props.itemName }
  render() {
    return (
      <div>
        <h1 style={{ color: "white" }}>{this.state.itemName}</h1>
      </div>
    )
  }
}

export default HeaderItem
