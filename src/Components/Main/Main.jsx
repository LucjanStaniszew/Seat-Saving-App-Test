import React, { useEffect, useState } from 'react';
import Times from '../Buttons/Times.jsx';
import Seats from '../Buttons/Seats.jsx';
import './Main.css';

const hours = [
  {id:0, hour: "05:00"},
  {id:1 , hour: "06:00"},
  {id:2 , hour: "07:00"},
  {id:3 , hour: "08:00"},
  {id:4 , hour: "09:00"},
  {id:5 , hour: "10:00"},
  {id:6 , hour: "11:00"},
  {id:7 , hour: "12:00"},
  {id:8 , hour: "13:00"},
  {id:9 , hour: "14:00"},
  {id:10 , hour: "15:00"},
  {id:11 , hour: "16:00"},
  {id:12 , hour: "17:00"},
  {id:13 , hour: "18:00"},
  {id:14 , hour: "19:00"},
  {id:15 , hour: "20:00"},
  {id:16 , hour: "21:00"},
  {id:17 , hour: "22:00"}
]

const seats = [
  {id:1 , seat:"1"},
  {id:2 , seat:"2"},
  {id:3 , seat:"3"},
  {id:4 , seat:"4"},
  {id:5 , seat:"5"},
  {id:6 , seat:"6"},
  {id:7 , seat:"7"},
  {id:8 , seat:"8"},
  {id:9 , seat:"9"},
  {id:10 , seat:"10"},
  {id:11 , seat:"11"},
  {id:12 , seat:"12"},
  {id:13 , seat:"13"},
  {id:14 , seat:"14"},
  {id:15 , seat:"15"},
  {id:16 , seat:"16"},
  {id:17 , seat:"17"}
]

function get2dg(num) {
  return num.toString().padStart(2, "0")
}

function dateFormat(date) {
  return [
    date.getFullYear(),
    get2dg(date.getMonth() + 1),
    get2dg(date.getDate()),
  ].join('-')
}

const Main = () => {

  const [reserve, setReserve] = useState({
    date: dateFormat(new Date()),
    time: "",
    seat: "",
    value: ""
  })

  useEffect(()=>{
    setReserve({
      ...reserve,
      value: "500"
    })
  })

  const handleChange = (e) => {
    console.log(reserve)
    e.preventDefault()
    setReserve({
      ...reserve,
      [e.target.name] : e.target.value
    })
  }

  return (
    <main className='container'>
      <form>
        <div className="form">
          <div className='left'>
            {/* SELECCIÓN DE DÍA */}
            <h4>Selecciona el día</h4>
            <input type="date" id='date' className='date'
            defaultValue={dateFormat(new Date())} min={dateFormat(new Date())}
            name="date" onChange={(e) => handleChange(e)}/>

            {/* SELECCIÓN DE HORARIO */}

            <section className='hours'>
              {
                hours?.map((h) => (
                  <button className='black' onClick={(e) => handleChange(e)}>
                    <Times id={h.id} hour={h.hour} name="time" value={h.hour}/>
                  </button>
                ))
              }
            </section>
          </div>

          <div className="right">
            {/* SELECCIÓN DE ASIENTO */}

            <h4>Selecciona tu asiento:</h4>
            <section className='seats'>
              {
                seats?.map((s) => (
                  <button className='black' onClick={(e) => handleChange(e)}>
                    <Seats id={s.id} seat={s.seat} name="seat" value={s.seat}/>
                  </button>
                ))
              }
            </section>
          </div>
        </div>
        <div className="bottom">
          {/* RESUMEN DE LA RESERVA */}
          <section className='reserveData'>
            <h4>Tu reserva es el día: {reserve.date}, en el horario: {reserve.time}, el asiento n°{reserve.seat} y tiene un costo de ${reserve.value}</h4>
          </section>

            {/* PAGO DE LA RESERVA */}

          <a href="" className='mpago'>
            <img src="./Assets/MPLogo.png" alt="Mercado Pago" className='mplogo' />
          </a>
        </div>
      </form>
    </main>
  )
}

export default Main