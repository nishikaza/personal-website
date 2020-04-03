import React, { Component } from "react"
import HeaderItem from "./headerItem"

const items = ["about", "experience", "contact"]

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

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
