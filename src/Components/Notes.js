import React, { useState } from 'react';
import Nav from './navbar';

function Notes(){

    const [notes, setNotes] = useState(['some value here']);

    return(
        <>
        <Nav />
        <div className="container custom-margin">
        <div className="border-radius p-5 mt-3 ">
       <div className="row text-center p-3">
           <h4 className="text-center">Notes for *value*</h4>
       </div>
        <div className="bg-success text-white p-3 row mt-3">
            <div className="col-sm-8">
            <h5 className="text-white">Date: *value from db*</h5>
            <p className="text-white"> *value from db*</p>
            </div>
            <div className="col-sm-4 text-right">
            <button className=' btn btn-danger btn-sm'>X</button>
            </div>
        </div>

        <div className="bg-success text-white p-3 row mt-3">
            <div className="col-sm-8">
            <h5 className="text-white">Date: *value from db*</h5>
            <p className="text-white"> *value from db*</p>
            </div>
            <div className="col-sm-4 text-right">
            <button className=' btn btn-danger btn-sm'>X</button>
            </div>
        </div>
         </div>
         </div>
         </>

    );
}

export default Notes;