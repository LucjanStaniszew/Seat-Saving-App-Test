import React from 'react';
import { useState } from 'react';
import "./Seats.css";

const Seats = ({seat}) => {

    const [selected, setSelected] = useState(false)
    const [selectedSeat, setSeat] = useState("")
    
    const handleSelected = (e) => {
        e.preventDefault()
        setSelected(selected => !selected)
        setSeat(seat)
        console.log(selectedSeat)
    }

    let changeClass = selected ? "selectedSeat" : "availableSeat";

  return (
    <button className={`seat ${changeClass}`}
    onClick={handleSelected} 
    value={seat} name="seat">
      {seat}
    </button>
  )
}

export default Seats