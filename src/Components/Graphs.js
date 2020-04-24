import React, { useContext, useState, useEffect } from 'react';
import Nav from './navbar';
import { Chart } from 'react-charts'
import { UserContext } from './UserContext';
import { authentication } from './firebase';
import { base } from './airtable';

function Graphs(){


  useEffect(() => {
    let checker = 0;
    let temp;
    let counter = [];
    authentication.onAuthStateChanged(user => {
      // console.log(user);

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
                    checker++;
                    if(checker == 1){

                      setUser(record);
                      temp = record;
                      console.log(temp)

                    }
                  // console.log(record);
  
              }

              


              if(checker){

              if(temp.fields.BX1 != "" && temp.fields.BX1 != null){
                counter.push(1)
              } 
              if(temp.fields.BX2 != "" && temp.fields.BX2 != null){
                counter.push(1)
              }
              if(temp.fields.BX3 != "" && temp.fields.BX3 != null){
                counter.push(1)
              }
              if(temp.fields.BX4 != "" && temp.fields.BX4 != null){
                counter.push(1)
              }
              if(temp.fields.BX5 != "" && temp.fields.BX5 != null){
                counter.push(1)
              }
              setCount(counter);
            }
              });
          
              // To fetch the next page of records, call `fetchNextPage`.
              // If there are more records, `page` will get called again.
              // If there are no more records, `done` will get called.
              fetchNextPage();
              // console.log(temp)

          
          }, function done(err) {
              if (err) { console.error(err); return; }
          });
      }
          
    
  })
  }, [])

 
  const [count, setCount] = useState([]);
  const [user, setUser] = useState([]);


     const data = React.useMemo(
    () => [
      {
        label: 'Number 1',
        data: [[0, 1], [1, 2]]
      },
      {
        label: 'Number 2',
        data: [[0, 3], [1, 1]]
      }
    ], []
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
 



    return(
        <div>

            
            <Nav />
            <div className="container">
                <div className="container custom-margin">
{
  count.map(item => {
    return(
                     
      <div
      style={{
        width: '400px',
        height: '300px'
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
    );
  })
}
          
                </div>
            </div>
        </div>
    );
}

export default Graphs;