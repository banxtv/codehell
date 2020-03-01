import React, { useState }  from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(1);
  const [fizzBuzz, setFizzyBuzzy] = useState('');

  function Increment() {
      setCount(count + 1);
      setFizzyBuzzy(FizzBuzz(count + 1));
  }

  function Decrement() {
      setCount(count - 1);
      setFizzyBuzzy(FizzBuzz(count - 1));
  }

  function Reset() {
      setCount(1);
      setFizzyBuzzy('');
  }

  /**
   * @return {string}
   */
  function FizzBuzz(num) {
      if (num % 15 === 0) {
        return 'FizzBuzz';
      } else if (num % 5 === 0) {
        return 'Buzz';
      } else if (num % 3 === 0) {
        return 'Fizz';
      } else {
        return '';
      }
    }

  return (
        <div className="App">
          <header className="App-header">
            <p>
              Dustin React FizzBuzz
            </p>
            <img src={logo} className="App-logo" alt="logo" />
              <p>
               <button onClick={Decrement}> - </button>
               <button onClick={Increment}> + </button>
              </p>
            <button onClick={Reset} >Reset</button>
            <p className="result">{fizzBuzz || count}</p>
          </header>
        </div>
      );
}

export default App;
