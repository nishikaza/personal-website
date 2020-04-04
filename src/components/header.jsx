import React, { Component } from "react"
import { Nav, Navbar } from "react-bootstrap"

const navbarItems = ["About", "Experience", "Contact"]

class Header extends Component {
  state = { navbarItems }

  render() {
    return (
      <div
        style={{
          marginBottom: `1.45rem`,
        }}
      >
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">nkaza</Navbar.Brand>
          <Nav>
            {this.state.navbarItems.map(item => (
              <Nav.Link key={item} href={"/" + item}>
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
