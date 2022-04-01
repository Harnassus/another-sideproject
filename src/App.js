import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './style.css';

function App () {
  const url = 'https://www.boredapi.com/api/activity';

  const [Activity, setActivity] = useState ([{}]);
  const [loading, setloading] = useState (false);

  useEffect(() => {
    fetch(`${url}`).then((response) => response.json()
    ).then(data => {
      setActivity(data)

      const timeout = setTimeout(() => {
        setloading(true)
      }, 500)
    })
    
  }, []);

  return (
    <div className="App">
      <h1>Are you bored?</h1>
      <div>
        {loading ?  Activity.activity  : (
          <div className="spinner">
            <div></div>
            <div></div>
          </div>
        )}
         
      </div>
    </div>
  );
}

export default App;
