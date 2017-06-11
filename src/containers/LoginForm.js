import React, {Component} from 'react';

import Validation from 'react-validation';
import validator from 'validator';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';

Object.assign(Validation.rules, {
    required: {
        rule: value => {
            return value.toString().trim();
        },
        hint: value => {
            return <span className='form-error is-visible'>Required</span>
        }
    },
    email: {
        rule: value => {
            return validator.isEmail(value);
        },
        hint: value => {
            return <span className='form-error is-visible'>{value} isnt an Email.</span>
        }
    },
    password: {
        rule: (value, components) => {
            const password = components.password.state;
            const passwordConfirm = components.passwordConfirm.state;
            const isBothUsed = password
                && passwordConfirm
                && password.isUsed
                && passwordConfirm.isUsed;
            const isBothChanged = isBothUsed && password.isChanged && passwordConfirm.isChanged;

            if (!isBothUsed || !isBothChanged) {
                return true;
            }

            return password.value === passwordConfirm.value;
        },
        hint: () => <span className="form-error is-visible">Passwords should be equal.</span>
    },
    // Define API rule to show hint after API error response
    api: {
        // We don't need the rule here because we will call the 'showError' method by hand on API error
        hint: value => (
            <button
                className="form-error is-visible"
            >
                API Error on "{value}" value. Focus to hide.
            </button>
        )
    }
});

class LoginForm extends Component {

  render() {
    
    return <Validation.components.Form className="container">
        <div>
            <label className="login-label" >
                Username
                <Validation.components.Input value='' name='username' validations={['required']} className="login-input" />
            </label>
        </div>
        <div>
            <label className="login-label" >
                Password
                <Validation.components.Input type='password' value='' name='password' validations={['required']} className="login-input" />
            </label>
        </div>
        <div>
            <Validation.components.Button className="sign-button">Sign In</Validation.components.Button>
        </div>
        <div className="line" />
        <Box direction='row' className="login-form-footer" >
          <Button className="register-button" href="#" >forget your password?</Button>
          <Button className="register-button" href="#" >register</Button>
        </Box>
    </Validation.components.Form>;
  }
}

export default LoginForm;
