import React, { useState, useEffect } from 'react';
import { authentication } from './firebase';
import { Redirect } from 'react-router-dom';
import Nav from './navbar';

function Home(){
    const [redirect, setRedirect] = useState(false);
    const [supervisorEmail, setSupervisorEmail] = useState('');
    const [numberOfBehaviours, setNumberOfBehaviours] = useState(1);
    const [behaviour, setBehaviour] = useState([
        {
            behaviourName: "Default",
            behaviourType: "Binary"
        }
    ]);
    const mappingArray = [1, 2, 3, 4, 5];
    useEffect(() => {
        authentication.onAuthStateChanged(user => {
            // console.log(user);

            if(user == null)
            setRedirect(true);
          
        });
        
    }, []);

    const handleLogout = e => {
        e.preventDefault();
        authentication.signOut();
    }

    const handleSupervisorEmail = e => {
        e.preventDefault();
        setSupervisorEmail(e.target.value);
    }

    const handleNumberOfBehaviours = e => {
        e.preventDefault();
        console.log(e.target.name);
        setNumberOfBehaviours(e.target.name);
    }

    const handleBehaviours = (e, index) => {
        e.preventDefault();
        let tempArrray = behaviour;
        // behaviour[index] = e.target
    }

    return(
        <div>
            {redirect ? <Redirect to='/login' /> : <> 
            <Nav />
            <div className="container custom-margin">
                       <div className="border-radius p-5 mt-3 ">
                      <div className="row text-center p-3">
                          <h3 className="text-center">Send Data</h3>
                      </div>
                        <form>
                            <div className="form-group">
                                <input onChange={handleSupervisorEmail} value={supervisorEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" class="form-text text-muted">Enter the email of your supervisor.</small>
                            </div>
                       
                            
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        </div>
                        </div>
                        
                        
                        <div className="container">
                       <div className="border-radius p-5 mt-3">
                      <div className="row text-center p-3">
                          <h3 className="text-center">Number of behaviours</h3>
                      </div>
                    <div className="row">
                        <button onClick={handleNumberOfBehaviours} name="1" className={"col-sm-2 m-2 btn " + (numberOfBehaviours == '1' ? " btn-success" : " btn-primary")}>1</button>
                        <button onClick={handleNumberOfBehaviours} name="2" className={"col-sm-2 m-2 btn btn-primary" + (numberOfBehaviours == '2' ? " btn-success" : " btn-primary")}>2</button>
                        <button onClick={handleNumberOfBehaviours} name="3" className={"col-sm-2 m-2 btn btn-primary" + (numberOfBehaviours == '3' ? " btn-success" : " btn-primary")}>3</button>
                        <button onClick={handleNumberOfBehaviours} name="4" className={"col-sm-2 m-2 btn btn-primary" + (numberOfBehaviours == '4' ? " btn-success" : " btn-primary")}>4</button>
                        <button onClick={handleNumberOfBehaviours} name="5" className={"col-sm-2 m-2 btn btn-primary" + (numberOfBehaviours == '5' ? " btn-success" : " btn-primary")}>5</button>
                    </div>
                        </div>
                        </div>
                        <div className="container mb-4">
                       <div className="border-radius p-5 mt-3">
                      <div className="row text-center p-3">
                          <h3 className="text-center">Behaviour Format and Number</h3>
                      </div>
                      
                     
                       
                     {
                         mappingArray.map((item, key) => {
                             if(key < numberOfBehaviours)
                                return(
                                    <>
                                    <div className="form-group">
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Behaviour Name" />
                                </div>
                                <div className="row mb-4 text-center">
                                        <button onClick={handleNumberOfBehaviours} name="binary" className={" m-2 btn " + (numberOfBehaviours == '1' ? " btn-success" : " btn-primary")}>Binary</button>
                                        <button onClick={handleNumberOfBehaviours} name="likert" className={" m-2 btn btn-primary" + (numberOfBehaviours == '2' ? " btn-success" : " btn-primary")}>Likert</button>
                                        <button onClick={handleNumberOfBehaviours} name="count" className={" m-2 btn btn-primary" + (numberOfBehaviours == '3' ? " btn-success" : " btn-primary")}>Count</button>
                                        <button onClick={handleNumberOfBehaviours} name="percentage" className={" m-2 btn btn-primary" + (numberOfBehaviours == '4' ? " btn-success" : " btn-primary")}>Percentage</button>
                                        <button onClick={handleNumberOfBehaviours} name="#" className={" m-2 btn btn-primary" + (numberOfBehaviours == '5' ? " btn-success" : " btn-primary")}>#</button>
                                        <button onClick={handleNumberOfBehaviours} name="rate" className={" m-2 btn btn-primary" + (numberOfBehaviours == '5' ? " btn-success" : " btn-primary")}>rate</button>
                                    </div>
                                    </>
                                )
                         })
                     }
                    <div className="text-center pt-5">
                            <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                        </div>
                        </div>
                        
                   
            {/* <button onClick={handleLogout} className="btn btn-primary btn-lg ml-5 text-right">Logout</button> */}
            </>
            } 
            </div>

            
    );
}

export default Home;