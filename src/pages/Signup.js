import React from 'react'; 
import '../styles/floating-body.css'

function Signup() {
  return (
    <form class="form-signin">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
      </div>

      <div class="form-label-group">
        <input type="text" id="name" class="form-control" placeholder="Full name" required autofocus></input>
        <label for="name">Full name</label>
      </div>

      <div class="form-label-group">
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus></input>
        <label for="inputEmail">Email address</label>
      </div>

      <div class="form-label-group">
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required></input>
        <label for="inputPassword">Password</label>
      </div>

      <div class="form-label-group">
        <input type="password" id="reinputPassword" class="form-control" placeholder="Password" required></input>
        <label for="reinputPassword">Re-enter Password</label>
      </div>

      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
    </form>
  );
}

export default Signup;
