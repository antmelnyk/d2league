import React from "react"
import { connect } from "react-redux"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import { fetchHeroes } from "../actions/heroes"

class Heroes extends React.Component {

  componentDidMount() {    
    this.props.fetchHeroes()
  }
  
  render () {
    const heroes =
      <ul className="heroes">
        {this.props.heroes.map((hero) => (
          <li className="hero" key={hero.name}>
            <LazyLoadImage
              className="hero__image"
              alt={hero.name}
              effect="opacity"
              src={`assets/dota_heroes/${hero.name}.png`} />
          </li>
        ))}
      </ul>;

    return (
      <React.Fragment>
        {heroes}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ heroes: state.heroes.list, isFetching: state.heroes.isFetching });
const mapDispatchToProps = { fetchHeroes };
export default connect(mapStateToProps, mapDispatchToProps)(Heroes)
