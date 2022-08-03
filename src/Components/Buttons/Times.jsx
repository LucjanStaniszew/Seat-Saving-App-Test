import React from 'react';
import { useState } from 'react';
import './Times.css';

const Times = ({hour}) => {

    const [selected, setSelected] = useState(false)
    const [time, setTime] = useState("")

    const handleSelected = (e) => {
      e.preventDefault();
      setSelected(selected => !selected)
      setTime(hour)
      console.log(time)
    }

    let changeClass = selected ? "selected" : "available";

  return (
    <button className={changeClass} 
    onClick={handleSelected}
    value={hour} name="time">{hour}</button>
  )
}

export default Times