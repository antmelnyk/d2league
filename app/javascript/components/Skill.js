import React from "react"
import PropTypes from "prop-types"

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'

class Skill extends React.Component {
  render () {
    
    return (
      <div className="skill">
        
        <LazyLoadImage
          className="skill__image"
          title={this.props.name}
          effect="opacity"
          src={`assets/champs_skills/${this.props.champion}/${this.props.type.toUpperCase().charAt(0)}.png`} />

        <div className="skill__info">
          <div className="skill__name">
            {this.props.name}
          </div>
          <div className="skill__description">
            {this.props.description}
          </div>
        </div>

      </div>
    );
  }
}

Skill.propTypes = {
  champion: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string
};

export default Skill
