import React, { useState } from 'react';
import Calendar from './components/Calendar/Calendar';
import Events from './components/Calendar/Events';

export default function App() {
  const [showCal, setCal] = useState(1);
  const [calDate, setCalDate] = useState(new Date());

  function changeCal() {
    if (showCal) {
      setCal(0);
    } else {
      setCal(1);
    }
  }

  function handleDate(newDate){
    setCalDate(newDate);
  }

  return (
    <div>
      {showCal ? 
      <Calendar showCal={showCal} onChange={changeCal} calDate={calDate} newDate={handleDate}/> 
      : <Events showCal={showCal} onChange={changeCal} calDate={calDate} newDate={handleDate}/>}
    </div>
  );
}