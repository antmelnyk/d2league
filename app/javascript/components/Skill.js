import React from "react"
import PropTypes from "prop-types"

class Skill extends React.Component {
  render () {
    const { name, champion, type, description } = this.props
    
    return (
      <div className="skill">
        
        <div className="skill__image">
          <img src={`assets/champs_skills/${champion}/${type.toUpperCase().charAt(0)}.png`} />
        </div>

        <div className="skill__info">
          <div className="skill__name">
            {name}
          </div>
          <div className="skill__description">
            {description}
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
