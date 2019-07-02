import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Hero from './Hero'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => ("Main")} />
          <Route path="/heroes" render={() => <Hero name="Pudge" roles={['initiator', 'nuker', 'durable']}/>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App