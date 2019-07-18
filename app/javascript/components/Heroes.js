import React from "react"
import { connect } from "react-redux"

import { suggestChampions } from "../actions/champions"
import { fetchHeroes } from "../actions/heroes"

import Spinner from "./Spinner"
import Hero from "./Hero"

class Heroes extends React.Component {

  constructor(props) {
    super(props)
    this.state = { searchValue: '' }

    this.handleSearch = this.handleSearch.bind(this)
    this.handleSuggestion = this.handleSuggestion.bind(this)
  }

  componentDidMount() {    
    this.props.fetchHeroes()
  }

  handleSearch(event) {
    this.setState({ searchValue: event.target.value })
  }

  handleSuggestion() {
    if(this.props.selectedHeroes.length > 0)
      this.props.suggestChampions(this.props.selectedHeroes)
  }
  
  render () {
    const heroes =
      <ul className="heroes">
        {this.props.heroes.map((hero) => (
          <Hero 
            {...hero} 
            visible={ this.state.searchValue == '' || hero.name.toLowerCase().includes(this.state.searchValue.toLowerCase()) }
            key={ hero.id } />
        ))}
      </ul>;

    return (
      <div className="heroes-container">

        <div className="heroes-actions">
          <input type="text" placeholder="Search hero..." value={this.state.searchValue} onChange={this.handleSearch} />
          <button onClick={this.handleSuggestion} className="button action-suggest-champions" type="button">
            Suggest Champions
          </button>
        </div>
        
        {this.props.isFetching ? <Spinner /> : heroes }

      </div>
    );
  }
}

const mapStateToProps = state => ({ 
  heroes: state.heroes.list,
  isFetching: state.heroes.isFetching,
  selectedHeroes: state.heroes.selected
});
const mapDispatchToProps = { fetchHeroes, suggestChampions };
export default connect(mapStateToProps, mapDispatchToProps)(Heroes)
