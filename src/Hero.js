import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext()

  return <section className="hero" onMouseOver={closeSubmenu}>
    <div className="hero-center">
      <article className='hero-info'>
        <h1>Payments infrastructure on the internet</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente vitae ea quaerat ducimus soluta veritatis quisquam quae exercitationem ullam nulla.</p>
        <button classname="btn">
          Start now
        </button>
      </article>
      <article className="hero-images">
        <img src={phoneImg} className="phone-img" alt='phone' />
      </article>
    </div>
  </section>
}

export default Hero
