import React, { useEffect, useState, createContext } from 'react';
import { base } from './airtable';
import { authentication } from './firebase';

export const UserContext = createContext();

export const UserProvider = props => {
    
    const [user, setUser] = useState(0);

    useEffect(() => {    
        
        fetch();
    }, [])


    const fetch = async () => {
        console.log('fetching')

        authentication.onAuthStateChanged(user => {
            console.log(user);

            if(user != null){

                base('eBRC').select({
                    // Selecting the first 3 records in Grid view:
                    // maxRecords: 3,
                    // view: "Grid view"
                }).eachPage(function page(records, fetchNextPage) {
                    // This function (`page`) will get called for each page of records.
                
                    records.forEach(function(record) {
                        // console.log(record.get('Name'))
                        // console.log(user.email)
                        if(record.get('Name') == "mayhan@davenport.k12.ia.us"){
                            setUser(record);
                        console.log(record)
        
                    }
                            // console.log('Retrieved', record.get('Name'));
                    });
                
                    // To fetch the next page of records, call `fetchNextPage`.
                    // If there are more records, `page` will get called again.
                    // If there are no more records, `done` will get called.
                    fetchNextPage();
                
                }, function done(err) {
                    if (err) { console.error(err); return; }
                });
            }
                
          
        })
    


    }


    return(
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    );
}