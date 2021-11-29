import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      btnDisable: true,
      validPassword: false,
      validEmail: false,
    };

    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateEmail() {
    const emailRegex = /[^@\t\r\n]+@[^@\t\r\n]+\.[^@\t\r\n]+/;
    const { email } = this.state;
    if (emailRegex.test(email)) {
      this.setState({ validEmail: true });
    } else {
      this.setState({ validEmail: false });
    }
  }

  validatePassword() {
    const MIN_PASSWORD = 5;
    const { password } = this.state;
    if (password.length >= MIN_PASSWORD) {
      this.setState({ validPassword: true });
    } else {
      this.setState({ validPassword: false });
    }
  }

  validateInputs() {
    const { validPassword, validEmail } = this.state;
    this.validatePassword();
    this.validateEmail();
    if (validEmail && validPassword) {
      this.setState({ btnDisable: false });
    } else {
      this.setState({ btnDisable: true });
    }
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    }, () => { this.validateInputs(); });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { email } = this.state;
    const { sendToStore, history } = this.props;
    sendToStore(email);
    history.push('/carteira');
  }

  render() {
    const { btnDisable, email, password } = this.state;
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="email-input">
            <input
              name="email"
              data-testid="email-input"
              id="email-input"
              onChange={ this.handleChange }
              value={ email }
            />
          </label>
          <label htmlFor="password-input">
            <input
              name="password"
              type="password"
              data-testid="password-input"
              id="password-input"
              onChange={ this.handleChange }
              value={ password }
            />
          </label>
          <button
            name="enter"
            type="submit"
            disabled={ btnDisable }
          >
            Entrar
          </button>
        </form>

      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendToStore: (state) => dispatch(setEmail(state)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  sendToStore: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
