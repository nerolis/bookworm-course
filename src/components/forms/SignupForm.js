
import React                 from 'react'
import PropTypes             from 'prop-types';
import { connect }           from 'react-redux'
import { Form, Button}       from 'semantic-ui-react';
import isEmail               from 'validator/lib/isEmail';
import InlineError           from '../messages/InlineError';
import { createUserRequest } from '../../actions/users';

class SignupForm extends React.Component {
    state = {
        data: {
          email: '',
          password: '',
        },
        loading: false,
        errors: {},
        }

componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.serverErrors })
}

onChange = (e) => this.setState({ ...this.state, data: { ...this.state.data, [e.target.name]: e.target.value} })

onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data)
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
        this.setState({ loading: true });
        this.props.submit(this.state.data)
    }
}

validate = data => {
    const errors = {};
    
    if (!isEmail(data.email)) errors.email = 'invalid email';
    if (!data.password) errors.password = "can't be blank";
    
    return errors;
}

render() {
    const { data, errors, loading } = this.state;
    
    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        <Form.Field error={!!errors.email}>
            <label htmlFor='email'>E-mail</label>
            <input 
                type='email'
                id='email'
                name='email'
                placeholder='example@example.com'
                value={data.email}
                onChange={this.onChange}
            />
            {errors.email && <InlineError text={errors.email} /> }

        </Form.Field>

        <Form.Field error={!!errors.password}>
            <label htmlFor='password'>Password</label>
            <input
                type='password'
                id='password'
                name='password'
                placeholder='Make it secure'
                value={data.password}
                onChange={this.onChange}
            />
            {errors.password && <InlineError text={errors.password} />}

        </Form.Field>


        <Button primary>Sign Up</Button>
      </Form>
  );
 }
}

function mapStateToProps(state) {
    return {
        serverErrors: state.formErrors.signup
    };
}

SignupForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { submit: createUserRequest })(SignupForm);
