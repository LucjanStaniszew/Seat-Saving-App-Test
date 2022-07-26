import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='progress'>
        <h4>All rights reserved</h4>
        <h4>Work in Progress</h4>
      </div>
      
      <nav className='footer'>

        <section>
          <h4>Contact</h4>
        </section>

        <section>

          <a href="https://wa.me/5491133518159" target="blank">
            <img src="Assets/whatsapp.png" alt="WhatsApp" className='logo' />
          </a>

          <a href="https://lucjan-staniszew-portfolio-lucjanstaniszew.vercel.app/" target="blank">
            <img src="Assets/portfolio.png" alt="Portfolio" className='logo' />
          </a>

          <a href="https://www.linkedin.com/in/luciano-staniszewski-784264222/" target="blank">
            <img src="Assets/linkedin.png" alt="LinkedIn" className='logo' />
          </a>

          <a href="https://github.com/LucjanStaniszew" target="blank">
            <img src="Assets/github.png" alt="GitHub" className='logo' />
          </a>

        </section>

      </nav>
    </footer>
  )
}

export default Footer