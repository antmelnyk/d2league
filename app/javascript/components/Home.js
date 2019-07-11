import React from "react"
import { Link } from "react-router-dom"

class Home extends React.Component {
  render () {
    return (
      <main className="welcome">
        <h1>From Dota 2 to</h1>
        <img src="/assets/lol-logo.png"/>
        <h2>Get your champion suggestions based on your Dota heroes</h2>
        <Link to="/suggestion">
          <button className="suggestion-link" type="button">
            Suggest me Champions
          </button>
        </Link>
        <section className="features-wrapper">
          <Link to="/roles" className="feature border-gold">
            <div className="feature__title">Roles</div>
            <div className="feature__description">Forget about Pudge+Techies supports. League's laning is more legit and each champion has its own unique class and mechanics. See classes and champions for yourself!</div>
          </Link>
          <Link to="/items" className="feature border-gold">
            <div className="feature__title">Itemization</div>
            <div className="feature__description">No more 10 sec BKB! League has more variety in items for each class of champions. Meet crit items, lethality items, support quest-items and more.</div>
          </Link>
          <Link to="/runes" className="feature border-gold">
            <div className="feature__title">Runes</div>
            <div className="feature__description">Before every game you can choose special runes that enchance your champion and playstyle the way you want. Check them out!</div>
          </Link>
          <Link to="/jungle" className="feature border-gold">
            <div className="feature__title">Jungle</div>
            <div className="feature__description">Jungler role is mandatory in League. Besides Baron (Roshan-like creature) there is a Dragons system and Blue/Red buff system. Learn more in details.</div>
          </Link>
          <Link to="/leagues" className="feature border-gold">
            <div className="feature__title">Powerful Ranked Matchmaking</div>
            <div className="feature__description">Tired from +25/-25 points for game and Shadow Amulet afking? League has much more strict ban policy and legit ranked system with Leagues and promotion games.</div>
          </Link>
        </section>
      </main>
    );
  }
}

export default Home
