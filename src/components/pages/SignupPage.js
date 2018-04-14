import React from 'react'
import SignupForm from '../forms/SignupForm';

const SignupPageStyles = {
    paddingTop: '300px'
}

const SignupPage = () => (
    <div style={SignupPageStyles} className='container'>
        <SignupForm />
    </div>
)

export default SignupPage;