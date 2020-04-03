import React, { Component } from "react"
import Link from "gatsby"

class HeaderItem extends Component {
  state = { itemName: this.props.itemName }
  render() {
    console.log(this.state.itemName)
    return (
      <div>
        <Link>{this.state.itemName}</Link>
        <h1>{this.state.itemName}</h1>
      </div>
    )
  }
}

export default HeaderItem
