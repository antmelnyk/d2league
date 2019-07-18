import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'

import { selectHero, deselectHero } from "../actions/heroes"

class Hero extends React.Component {

  handleClick(hero_id) {
    this.props.selected ?
      this.props.deselectHero(hero_id) :
      this.props.selectHero(hero_id)
  }
  
  render () {
    const { selected, visible, id, name } = this.props
    const classes = `hero ${selected ? 'hero--selected' : ''} ${visible ? '' : 'hero--hidden'}`

    return (
      <li className={classes} onClick={this.handleClick.bind(this, id)}>
        <LazyLoadImage
          className="hero__image"
          title={name}
          effect="opacity"
          src={`assets/dota_heroes/${name}.png`} />
      </li>
    );
  }
}

Hero.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => ({ 
  selected: state.heroes.selected.some(hero_id => { 
    return hero_id === ownProps.id 
  }) 
});
const mapDispatchToProps = { selectHero, deselectHero };
export default connect(mapStateToProps, mapDispatchToProps)(Hero)
