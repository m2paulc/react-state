import { useState } from 'react';

function Clicker() {
  const [num, setNum] = useState(1);
  const getRandNum = () => {
    setNum(Math.floor(Math.random() * 10 + 1));
  };

  return (
    <div>
      <h2>Number is { num }</h2>
      { num === 7 ? <p>Congrats! You got the lucky number 7!</p> : <button onClick={ getRandNum }>Generate Random Number</button> }
    </div>
  );
}

export default Clicker;