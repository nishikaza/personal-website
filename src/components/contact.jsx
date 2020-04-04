import React, { Component } from "react"

const platforms = [
  ["LinkedIn.", "https://www.linkedin.com/in/nishikaza", "#2867B2"],
  ["Github.", "https://wwww.github.com/nishikaza", "#6CC644"],
  ["Instagram.", "https://www.instagram.com/nishikaza_", "#E1306C"],
]
class Contact extends Component {
  state = {}
  render() {
    return (
      <div
        style={{
          backgroundColor: "#000839",
          color: "white",
          margin: "3em",
        }}
      >
        <h1 style={{ color: "#ffa41b" }}>Get in touch</h1>
        <p>
          I'm always looking for new opportunities to meet like-minded people.
          If you are interested, you can find me at the links below:
        </p>
        {platforms.map(platform => (
          <h2>
            <a
              style={{ color: platform[2] }}
              target="_blank"
              rel="noopener noreferrer"
              href={platform[1]}
            >
              {platform[0]}
            </a>
          </h2>
        ))}
      </div>
    )
  }
}

export default Contact
