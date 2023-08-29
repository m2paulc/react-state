/* 
Functional component using React Hooks to manage State
*/

import { useEffect, useState } from 'react';

function Time() {
  const [time, setTime] = useState(new Date());
  //this handles componentDidMount and componentWillUnmount
  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const tick = () => {
    setTime(new Date());
  };
  return (
    <div>
      <h2>Time</h2>
      <h3>It is { time.toLocaleTimeString() }</h3>
    </div>
  );
}

export default Time;