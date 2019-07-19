import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"

import Home from "./pages/Home"
import Suggestion from "./pages/Suggestion"

import configureStore from "../configureStore"
const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <main className="app-wrapper">

          <BrowserRouter>
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route path="/suggestion" render={() => <Suggestion />} />
            </Switch>
          </BrowserRouter>

          <footer className="footer">
            <div className="container">
              <div className="footer__disclaimer">
                This is a fan site. It has no official relation with Valve or Riot Games and isn't promoting anything.
              </div>
            
              <a
                className="footer__source"
                target="_blank"
                href="https://github.com/pixelgoo/d2league">
                Source code
                <img src="assets/github-logo.png" />
              </a>
              <a 
                className="footer__donate"
                target="_blank"
                href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=pixelgoo%40gmail.com&item_name=d2league.fun+appreciation%21&currency_code=USD&source=url">
                  Buy me a beer 🍺
              </a>
              <a className="footer__contact" href="mailto:pixelgoo@gmail.com">Contact me 📧</a>
            </div>
          </footer>

        </main>
      </Provider>
    );
  }
}

export default App
