import { useState } from 'react'
import { useEffect } from 'react'


import './App.css'

function App() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchQuote = () => {
      fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
        .then(response => {
          if (!response.ok) {
            throw new Error('error');
          }
          return response.json();
        })
        .then(data => {
          if (Array.isArray(data) && data.length > 0) {
            setQuote(data[0]);
          } else {
            throw new Error('error');
          }
        })
        .catch(error => {
          console.error('Error fetching quote:', error);
        });
    };

   
    fetchQuote();

    const intervalId = setInterval(fetchQuote, 30000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Ron Swanson says:</h1>
      <h1>{quote}</h1>
    </div>
  );
}

export default App


