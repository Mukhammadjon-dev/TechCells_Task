import { useState } from 'react';

import './App.css';

function App() {
  const [inputNumber, setInputNumber] = useState("");
  const [result, setResult] = useState("Please, enter data to input ");

  function isPrimeNumber(num) {
    let i = 2;
    while (i <= num / 2) {
      if (num % i++ === 0) {
        return false;
      };
    };
    return true;
  }

  function isMersennePrimeNumber(value) {
    const num = parseFloat(value)

    let i = 0, n = num + 1;
    while (n !== 1) {
      if (n % 2 !== 0) {
        return false;
      };
      n /= 2;
    };
    return true;
  };

  function checkNumber(number) {
    if (isNaN(number)) {
      return `"${number}" is Invalid number`
    }

    if (number < 2) {
      return `${number} is not a prime number`
    }

    if (isPrimeNumber(number)) {
      if (isMersennePrimeNumber(number)) {
        return `${number} is a Mersenne Prime Number`
      }

      return `${number} is a regular prime number`
    }

    return `${number} is not a prime number`
  }

  function handleChange(val) {
    const resultText = checkNumber(val)

    setInputNumber(val);

    if (val) {
      setResult(resultText);
    } else {
      setResult("Please, enter data to input ");
    }
  }

  return (
    <div className="App">
      <div className='container'>
        <h1 className='mt-2'> Task</h1>
        <div className='row p-2 justify-content-center'>
          <input
            className="col-6 m-2 input_style"
            value={inputNumber}
            placeholder="Enter a number"
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        <div className='row justify-content-center p-2'>
          <p className='output_style col-6 mb-4 mt-2'>{result}</p>
        </div>
        <div className='row m-auto  col-8'>
          <p className='text'> <b>Plese note!</b> In mathematics, a <a href='https://en.wikipedia.org/wiki/Mersenne_prime' target="_blank">Mersenne prime</a> is a prime number that is one less than a power of two. It is a prime number of the form <b> <i> M</i><sub>n</sub> = 2<sup>n</sup>-1</b> (not <b><i> M</i><sub>n</sub> = 2<sup>n</sup></b><b>+1</b> ) for some <b>integer</b> <i>n.</i> That's why Mersenne primes are <a href='https://en.wikipedia.org/wiki/Mersenne_prime' target="_blank">3, 7, 31, 127, 8191 etc</a>,  and 17 is not a Mersenne Prime number.
            <br /> It seems like there was a minor mistake in the <b>Task Instruction</b> about Mersenne Prime number. </p>

        </div>
      </div>
    </div>
  );
}

export default App;
