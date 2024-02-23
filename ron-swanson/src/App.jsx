import React, { useEffect, useState, useRef } from 'react';

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = () => {
      fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
        .then(res => res.json())
        .then(data => {
          setData(data[0]);
          setTimeout(fetchData, 30000);
        })
        .catch(console.error);
    };

   return () => fetchData();

  }, []);

  return (
    <div>
      <h1>Ron Swanson says:</h1>
      
      <h2>{data}</h2>
  
    </div>
  );
}

export default App;


