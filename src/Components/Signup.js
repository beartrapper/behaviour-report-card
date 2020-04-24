import React, {useEffect, useState} from 'react';
import {useLocation, Redirect, Link} from 'react-router-dom';
import { authentication, firestore } from "./firebase";
import { base } from './airtable';


function SignUpOption () {

  useEffect(() => {
    

    authentication.onAuthStateChanged(user => {
      if (user) {
        setRedirect(true);

        // setCurrentUser(user);
      } else {
        // clearCurrentUser();
      }
    });

  }, []);


  const [signUpError, setSignUpError] = useState(false);
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const location = useLocation();


  const handleEmail = e => {
    e.preventDefault();
    setSignUpError(false)
    setEmail(e.target.value);
  };

  const handlePassword = e => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  // const handleUsername = e => {
  //   e.preventDefault();
  //   setUsername(e.target.value);
  //   setSignUpError(false)

  // };


  // const handleFullName = e => {
  //   e.preventDefault();
  //   setFullName(e.target.value);
  //   setSignUpError(false)

  // };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    authentication
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res)


        base('Data').create({
          "Name": "Jgibb2018@my.fit.edu",
          "Notes": "undefined",
          "Supervisor": "null",
          "Type of Data": "Binary",
          "Binary 1": "0",
          "Binary 2": "0",
          "Binary 3": "0",
          "Date1": "'12/29'"
        }, {typecast: true}, function(err, record) {
          if (err) {
            console.error(err);
            return;
          }
          console.log(record.getId());
        });

        // base('eBRC').create({
        //   "Name": email,
        //   "datetime": Date.now(),
        //   "Supervisor": "",

        // }, function(err, record) {
        //   if (err) {
        //     console.error(err);
        //     return;
        //   } else {
        //     // setLoading(false);
        //     // setDone(true);
        //     // setTimeout(() => setRedirect(true), 3000)
        //   }
        //   // console.log(record.getId());
        // });
       
       
       
      })
      .catch(err => setSignUpError(true));
  };


    return(
         <>
       {redirect ? <Redirect to="/" />:<></>}

    
    <div className="ps-page--signin pt-5 mt-5">
      <div className="container">
        <form className="ps-form--signin" onSubmit={handleSubmit}>
          <div className="ps-form__header">
            <h3>Sign Up</h3>
            <p>Sign Up now to Access Your Dashboard</p>
            {signUpError ? <>
              <p className="alert alert-danger">Is the email typed correctly?</p>
            
            </>:<></>}
            {done ? <>
              <p className="alert alert-success">You will be redirected in 2-3 seconds. Have a great time!</p>
            
            </>:<></>}
          </div>
          <div className="ps-form__content">
            <div className="form-group">
              <input className="form-control" type="text" placeholder=" Username or Email" onChange={handleEmail}/>
            </div>
            <div className="form-group">
              <input className="form-control" type="password" placeholder="Password" onChange={handlePassword}/>
            </div>

          </div>
    
          <div className="ps-form__footer">
            <button className={"ps-btn ps-btn--fullwidth ps-btn--gradient" + (loading ? 'disabled' : '')}>Sign up</button>
            <p>Already have an account?<Link to="/login">Sign in!</Link></p>
          </div>
        </form>
      </div>
    </div>  
         

         


      
 

  
  </>
    );
}

export default SignUpOption;