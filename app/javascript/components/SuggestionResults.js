import React from "react"
import { connect } from "react-redux"

import Spinner from "./Spinner"
import Champion from "./Champion"

class SuggestionResults extends React.Component {
  render () {
    const champions = <ul className="champions">
        {this.props.champions.map((champion) => (
          <Champion {...champion} key={champion.similarity_info.champion_id} />
        ))}
      </ul>;

    return (
      <div className="suggestion-results-container">
        <div className="suggestion-results-container__hint">
          { this.props.champions.length == 0 ? "Select up to 5 Dota 2 heroes and click Suggest button!" : "" }
        </div>
        { this.props.isFetching ? <Spinner /> : champions }
      </div>
    );
  }
}

const mapStateToProps = state => ({ champions: state.champions.list, isFetching: state.champions.isFetching });
export default connect(mapStateToProps, null)(SuggestionResults)
