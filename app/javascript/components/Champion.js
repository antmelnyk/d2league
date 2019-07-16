import React from "react"
import PropTypes from "prop-types"

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'

import Skill from './Skill'

class Champion extends React.Component {

  constructor(props) {
    super(props)
    this.state = { skillsAreVisible: false }
    
    this.handleSkillsToggle = this.handleSkillsToggle.bind(this)
  }

  handleSkillsToggle() {
    this.setState(state => ({
      skillsAreVisible: !state.skillsAreVisible
    }))
  }

  render () {

    const skillsAreVisible = this.state.skillsAreVisible ? '' : 'champion__skills--hidden'
    const championSkillsClasses = `champion__skills ${skillsAreVisible}`

    return (
      <li className="champion border-gold">

        <div className="champion__header">
          <LazyLoadImage
            className="champion__image"
            title={this.props.champion_info.name}
            effect="opacity"
            src={`assets/league_champs/${this.props.champion_info.name}.png`} />
            
          <div className="champion__info">
            <div className="champion__title">
              {this.props.champion_info.name}
            </div>
            <div className="champion__role">
              <img src={`assets/champs_roles/${this.props.champion_info.role}.png`} />
              {this.props.champion_info.role}
            </div>
            <div className="champion__description">
              {this.props.similarity_info.description}
            </div>
          </div>
        </div>
        
        <div className={championSkillsClasses}>
          <div class="champion__skills-toggler" onClick={this.handleSkillsToggle}>
            { this.state.skillsAreVisible ? "Hide" : "Show" } skills
          </div>
          {['passive', 'q', 'w', 'e', 'r'].map((skill, index) => (
            <Skill champion={this.props.champion_info.name} type={skill} name={this.props.champion_info[skill]}
            description={this.props.champion_info[`${skill}_description`]} key={index} />
          ))}
        </div>

      </li>
    );
  }
}

Champion.propTypes = {
  similarity_info: PropTypes.shape({
    id: PropTypes.number,
    hero_id: PropTypes.number,
    champion_id: PropTypes.number,
    role: PropTypes.boolean,
    skills: PropTypes.boolean,
    theme: PropTypes.boolean,
    description: PropTypes.string
  }),
  champion_info: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    passive: PropTypes.string,
    passive__description: PropTypes.string,
    q: PropTypes.string,
    q_description: PropTypes.string,
    w: PropTypes.string,
    w_description: PropTypes.string,
    e: PropTypes.string,
    e_description: PropTypes.string,
    r: PropTypes.string,
    r_description: PropTypes.string,
    role: PropTypes.boolean
  })
};

export default Champion
