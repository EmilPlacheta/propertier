import React, { useState, useEffect } from 'react';

const DateTime = () => {
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      setDate(new Date().toLocaleDateString());
      setTime(
        new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        })
      );
    });
  }, []);
  return (
    <div className='white-text'>
      <p>
        {date}
        {time}
      </p>
    </div>
  );
};

export default DateTime;
