import React, { Component } from "react"
import HeaderItem from "./headerItem"

const items = ["Home"]
//const items = ["Home" , "About", "Experience", "Contact"]

class Header extends Component {
  state = {}

  render() {
    return (
      <div
        style={{
          background: "midnightblue",
          marginBottom: `1.45rem`,
        }}
      >
        {items.map(item => (
          <HeaderItem key={item} itemName={item} />
        ))}
      </div>
    )
  }
}

export default Header
