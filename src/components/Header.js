import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { storedEmail } = this.props;
    return (
      <header>
        <p>{ storedEmail }</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  storedEmail: state.user.email,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  storedEmail: PropTypes.string.isRequired,
};
