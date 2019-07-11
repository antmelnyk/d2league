import React from "react"
import { connect } from "react-redux"

import Heroes from "./Heroes"
import SuggestionResults from "./SuggestionResults"

import { suggestChampions } from "../actions/champions"


class Suggestion extends React.Component {

  constructor() {
    super()
    this.handleSuggestion = this.handleSuggestion.bind(this)
  }

  handleSuggestion() {
    this.props.suggestChampions()
  }

  render () {
    return (
      <div>
        <Heroes />
        <SuggestionResults />
        <button onClick={this.handleSuggestion} className="suggest" type="button">
          Suggest Champions
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ champions: state.champions.list, isFetching: state.champions.isFetching });
const mapDispatchToProps = { suggestChampions };
export default connect(mapStateToProps, mapDispatchToProps)(Suggestion)
