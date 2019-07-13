import React from "react"
import { connect } from "react-redux"

import Heroes from "../Heroes"
import SuggestionResults from "../SuggestionResults"

import { suggestChampions } from "../../actions/champions"


class Suggestion extends React.Component {

  constructor() {
    super()
    this.handleSuggestion = this.handleSuggestion.bind(this)
  }

  handleSuggestion() {
    this.props.suggestChampions(this.props.selectedHeroes)
  }

  render () {
    return (
      <div className="suggestion-wrapper container">
        <h1>Select up to 5 Dota 2 heroes and click here</h1>
        <button onClick={this.handleSuggestion} className="button action-suggest-champions" type="button">
          Suggest Champions
        </button>
        <div className="suggestion">
          <Heroes />
          <SuggestionResults />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ 
  selectedHeroes: state.heroes.selected,
  champions: state.champions.list,
  isFetching: state.champions.isFetching 
});
const mapDispatchToProps = { suggestChampions };
export default connect(mapStateToProps, mapDispatchToProps)(Suggestion)
