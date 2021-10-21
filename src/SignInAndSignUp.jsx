import React from 'react';

import SignIn from './Component/SignIn.component';
import './SignInAndSignUp.styles.scss'
import SignUp from './Component/SignUp.component';



const SignInAndSignUpPage = ()=>(
    <div className="sign-in-and-sign-up">
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>
);

export default SignInAndSignUpPage; 
