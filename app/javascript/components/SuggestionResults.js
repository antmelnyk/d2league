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
        {this.props.isFetching ? <Spinner /> : champions }
      </div>
    );
  }
}

const mapStateToProps = state => ({ champions: state.champions.list, isFetching: state.champions.isFetching });
export default connect(mapStateToProps, null)(SuggestionResults)
