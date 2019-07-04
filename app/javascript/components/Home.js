import React from "react"
import { Link } from "react-router-dom"

class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>Dota To League</h1>
        <h2>Get your champion suggestions based on your Dota heroes</h2>
        <h3>...and a few tips for transitioning and differences between games.</h3>
        <Link to="/suggest">
          <button type="button">
            Suggest me Champions
          </button>
        </Link>
      </div>
    );
  }
}

export default Home
