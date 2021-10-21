import React from "react";

import CustomButton from "../Utils/CustomButton";
import FormInput from "../Utils/FormInput";
import { loginUser, signInWithGoogle } from "../appwrite/appwrite.auth";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    loginUser(email, password).then(
      (res) =>{
          console.log(res);
          window.location.reload();
      },
      (err) =>alert(err)
    );
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
    console.log(this.state);
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="Password"
            required
          />

          <div className="buttons">
            <CustomButton type="submit">Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {""}
              Sign in with google {""}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
