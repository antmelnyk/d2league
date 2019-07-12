import React from "react"
import { connect } from "react-redux"

import { fetchHeroes } from "../actions/heroes"
import Spinner from "./Spinner"
import Hero from "./Hero"

class Heroes extends React.Component {

  componentDidMount() {    
    this.props.fetchHeroes()
  }
  
  render () {
    const heroes =
      <ul className="heroes">
        {this.props.heroes.map((hero) => (
          <Hero {...hero} key={hero.id} />
        ))}
      </ul>;

    return (
      <div className="heroes-container">
        {this.props.isFetching ? <Spinner /> : heroes }
      </div>
    );
  }
}

const mapStateToProps = state => ({ heroes: state.heroes.list, isFetching: state.heroes.isFetching });
const mapDispatchToProps = { fetchHeroes };
export default connect(mapStateToProps, mapDispatchToProps)(Heroes)
