import React, { Component } from "react"
import { Nav, Navbar } from "react-bootstrap"

class Header extends Component {
  state = { navbarItems: ["About", "Experience", "Contact"] }

  navbarStyle = {
    backgroundColor: "#222831",
  }

  navItemStyle = {
    color: "white",
  }
  render() {
    return (
      <div>
        <Navbar variant="dark" fixed="top" style={this.navbarStyle}>
          <Navbar.Brand href="/">nkaza</Navbar.Brand>
          <Nav>
            {this.state.navbarItems.map(item => (
              <Nav.Link key={item} href={"#" + item}>
                {item}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default Header
