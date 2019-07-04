import React from "react"
import { connect } from "react-redux"

import { fetchHeroes } from "../actions/heroes"

class Heroes extends React.Component {

  componentDidMount() {    
    this.props.fetchHeroes()
  }
  
  render () {  
    const heroes =
      <ul>
        {this.props.heroes.map((hero) => (
          <ul key={hero.name}>
            <div>{hero.name}</div>>
            {hero.roles.map((role, index) => <li key={index}>{role}</li>)}
          </ul>
        ))}
      </ul>;

    return (
      <React.Fragment>
        {heroes}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ heroes: state.heroes.heroes, isFetching: state.heroes.isFetching });
const mapDispatchToProps = { fetchHeroes };
export default connect(mapStateToProps, mapDispatchToProps)(Heroes)
