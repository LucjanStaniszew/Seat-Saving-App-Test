import React from 'react';
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <nav className='navigation'>
        <a href="/">
          <img src="Assets/iveco.png" alt="Iveco Van" className='logo'/>
        </a>
        <h1 className='title'>Seat Reservation App</h1>
        <a href="https://lucjan-staniszew-portfolio-lucjanstaniszew.vercel.app/" target="blank">
          <img src="Assets/portfolio.png" alt="Portfolio" className='me' />
        </a>
      </nav>

    </header>
  )
}

export default NavBar