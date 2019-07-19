import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

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
    const { heroes, similarity_info, champion_info } = this.props

    const skillsAreVisible = this.state.skillsAreVisible ? '' : 'champion__skills--hidden'
    const championSkillsClasses = `champion__skills ${skillsAreVisible}`

    const similarHeroes = heroes
      .filter(hero => similarity_info.hero_id.includes(hero.id))
      .map(similarHero => <img key={similarHero.id} src={`assets/dota_heroes/${similarHero.name}.png`} />)

    const descriptions = similarity_info.description
      .map(desc => <div className="champion__description">{desc}</div>)

    const championRoleLink = `https://leagueoflegends.fandom.com/wiki/Category:${champion_info.role}_champion`
    const championLink = `https://leagueoflegends.fandom.com/wiki/${champion_info.name}` 
        
     
    return (
      <li className="champion border-gold">

        <div className="champion__header">

          <div className="champion__image">
            <LazyLoadImage
              title={champion_info.name}
              effect="opacity"
              src={`assets/league_champs/${champion_info.name}.png`} />
          </div>
          
            
          <div className="champion__info">
            <div className="champion__title">
              
              <a 
                className="champion__name"
                target="_blank"
                href={championLink}>
                  {champion_info.name}
              </a>

              <span className="champion__similar-to">
                <span>(because you like</span>
                  <div className="similar-heroes">
                    {similarHeroes}
                  </div>
                <span>)</span>
              </span>

            </div>

            <div className="champion__role">
              <span className="champion__role-icon">
                <LazyLoadImage
                  title={champion_info.role}
                  effect="opacity"
                  src={`assets/champs_roles/${champion_info.role}.png`} />
              </span>
              <a target="_blank" href={ championRoleLink }>
                {champion_info.role}
              </a>
            </div>

            <div className="champion__similarities">
              <div className="champion__similar-by"> 
                { similarity_info.role ? "Similar role in game" : "" }
              </div>
              <div className="champion__similar-by"> 
                { similarity_info.skills ? "Similar skills or mechanics" : "" }
              </div>
              <div className="champion__similar-by"> 
                { similarity_info.theme ? "Similar theme or visuals" : "" }
              </div>
            </div>

            {descriptions}
          </div>

        </div>
        
        <div className={championSkillsClasses}>
          <div className="champion__skills-toggler" onClick={this.handleSkillsToggle}>
            { this.state.skillsAreVisible ? "Hide" : "Show" } skills
          </div>
          {['passive', 'q', 'w', 'e', 'r'].map((skill, index) => (
            <Skill champion={champion_info.name} type={skill} name={champion_info[skill]}
            description={champion_info[`${skill}_description`]} key={index} />
          ))}
        </div>

      </li>
    );
  }
}

Champion.propTypes = {
  similarity_info: PropTypes.shape({
    id: PropTypes.number,
    hero_id: PropTypes.array,
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

const mapStateToProps = state => ({ heroes: state.heroes.list });
export default connect(mapStateToProps, null)(Champion)
