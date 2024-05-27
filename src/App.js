import React from 'react'
import bgMobile from "./images/bg-main-mobile.png"
import bgDesktop from "./images/bg-main-desktop.png"
import logoCard from "./images/card-logo.svg"


export default function App() {
  return (
    <>
      <section>
        <div className='absolute -z-10'>
          <picture>
            <source media="(min-width: 1024px)" srcSet={bgDesktop} />
            <img src={bgMobile} alt=''/>
          </picture>
        </div>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
          <div className='mt-10 mx-5'>
            <article className='front-card p-5'>
              <img src={logoCard} alt=''/>
              <div>
                <h2>1234 5678 9012 3456</h2>
                <ul>
                  <li>Nome Completo</li>
                  <li>00/00</li>
                </ul>
              </div>
            </article>
            <article className='back-card'></article>
          </div>
          <div>form</div>
        </div>
      </section>
    </>
  )
}

