import React from "react"
import PropTypes from "prop-types"

class Hero extends React.Component {
  render () {

    let roles = this.props.roles.map((role) =>
      <div key={role}>
        {role}
      </div>
    );

    return (
      <React.Fragment>
        Name: {this.props.name}
        <div>
          Roles: {roles}
        </div>
      </React.Fragment>
    );
  }
}

Hero.propTypes = {
  name: PropTypes.string,
  roles: PropTypes.array
};

export default Hero
