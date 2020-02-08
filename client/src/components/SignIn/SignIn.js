import React from 'react';
import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { signInwithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }
  handleOnSubmit = e => {
    e.preventDefault();
    this.setState({
      email: '',
      password: ''
    });
  };
  handelChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in' onSubmit={this.handleOnSubmit}>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handelChange}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handelChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={signInwithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
