import React, {useEffect, useState} from 'react';
import {useLocation, Redirect, Link} from 'react-router-dom';
import { authentication, firestore } from "./firebase";



function SignIn () {

  useEffect(() => {
    

    authentication.onAuthStateChanged(user => {
      if (user != null) 
    //   console.log(user);
        setRedirect(true);
    });

  }, []);


  const [signInError, setsignInError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const location = useLocation();


  const handleEmail = e => {
    e.preventDefault();
    setEmail(e.target.value);
    setsignInError(false);
    
};

  const handlePassword = e => {
    e.preventDefault();
    setPassword(e.target.value);
    setsignInError(false);
  };


  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    authentication
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        setLoading(false);
        setRedirect(true);
      })
      .catch(err => {
          setsignInError(true);
          setLoading(false);
        });
  };


    return(
         <>
  
{redirect ? <Redirect to="/" /> :<>
<div class="ps-page--signin text-center pt-5 mt-5">
      <div class="container">
        <form class="ps-form--signin" onSubmit={handleSubmit}>
          <div class="ps-form__header">
            <h3>Sign In</h3>
            <p>Sign in now to Access Your Dashboard</p>
          </div>
          <div class="ps-form__content">
            <div class="form-group">
              <input class="form-control" type="email" placeholder=" Email" onChange={handleEmail}/>
            </div>
            <div class="form-group">
              <input class="form-control" type="password" placeholder="Password" onChange={handlePassword}/>
            </div>
          </div>
          {
              signInError  ?
              <div className="col-sm-12 alert alert-danger">
              Incorrect details
          </div>
          :<></>
          }
          <div class="ps-form__footer">
            <button class="ps-btn ps-btn--fullwidth ps-btn--gradient">{loading ? <>Please wait</> : <> Login </>}</button>
            <p>Don't have an account?<Link to="/signup" > Sign up now! </Link></p>
          </div>
        </form>
      </div>
    </div> 
</>  }
    


      
 

  
  </>
    );
}

export default SignIn;