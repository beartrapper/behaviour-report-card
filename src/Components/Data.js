import React from 'react';
import Nav from './navbar';

function Data () {
    return(
        <div className="container">
            <Nav />
            <div className="container custom-margin">
                       <div className="border-radius p-5 mt-3 ">
                      <div className="row text-center p-3">
                          <h4 className="text-center">Rate how much *value* happened today</h4>
                      </div>
                      <div class="btn-toolbar" role="toolbar" aria-label="...">
      <div class="btn-group" role="group" aria-label="...">
        <a class="btn btn-link disabled" disabled>Not at all</a>
        <button type="button" class="btn btn-default likert-1">1</button>
        <button type="button" class="btn btn-default likert-2">2</button>
        <button type="button" class="btn btn-default likert-3">3</button>
        <button type="button" class="btn btn-default likert-4">4</button>
        <button type="button" class="btn btn-default likert-5">5</button>
        <a class="btn btn-link disabled" disabled>All day long</a>
      </div>
    </div>
                        </div>
                        </div>

                        <div className="container custom-margin">
                       <div className="border-radius p-5 mt-3 ">
                      <div className="row text-center p-3">
                          <h4 className="text-center">Rate how much *value* happened today</h4>
                      </div>
                 <input type="number" value="1" className="text-center"/>
                        </div>
                        </div>

                        <div className="container custom-margin">
                       <div className="border-radius p-5 mt-3 ">
                      <div className="row text-center p-3">
                          <h4 className="text-center">Rate how much *value* happened today</h4>
                      </div>
                 <input type="number" value="1" className="text-center"/>
                        </div>
                        </div>

                        <div className="container custom-margin">
                       <div className="border-radius p-5 mt-3 ">
                      <div className="row text-center p-3">
                          <h4 className="text-center">Rate how much *value* happened today</h4>
                      </div>
                 <input type="number" value="1" className="text-center"/>
                        </div>
                        </div>

                        <div className="container custom-margin">
                       <div className="border-radius p-5 mt-3 ">
                      <div className="row text-center p-3">
                          <h4 className="text-center">Rate how much *value* happened today</h4>
                      </div>
                 <input type="number" value="1" className="text-center"/>
                        </div>
                        </div>

                        


                        </div>
                        
    );
}

export default Data;