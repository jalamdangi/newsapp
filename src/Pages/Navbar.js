import React, { useState, useEffect } from 'react'
import WeatherInfo from './WeatherInfo'

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState('')

  const getTime = () => {
    const d = new Date()
    const time = d.toLocaleTimeString()
    setCurrentTime(time)
  }

  useEffect(() => {
    const intervalId = setInterval(getTime, 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <style>
        {`.brand #time-section{margin: 0; padding: 0; font-family: cursive;}`}
      </style>

      {/* Top Bar Start */}
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="tb-contact">
                <p>
                  <i className="fas fa-envelope"></i>vikramofficial63@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone-alt"></i>8889490358
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tb-menu">{/* Add your menu content here */}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Top Bar End */}

      {/* Brand Start */}
      <div className="brand">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-4">
              <div className="b-logo" style={{ marginBottom: 0 }}>
                <a href="index.php">
                  <h2
                    style={{
                      fontFamily: 'serif',
                      textTransform: 'uppercase',
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    News Jumbo
                  </h2>
                  <h4 id="time-section">
                    Time : <span id="time">{currentTime}</span>
                  </h4>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-4">
              {/* Add your content here */}
            </div>
            <div className="col-lg-3 col-md-4">
              <WeatherInfo></WeatherInfo>
            </div>
          </div>
        </div>
      </div>
      {/* Brand End */}

      {/* Nav Bar Start */}
      <div className="nav-bar">
        <div className="container">
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <a href="#" className="navbar-brand">
              MENU
            </a>
            {/* Add your navigation links here */}
          </nav>
        </div>
      </div>
      {/* Nav Bar End */}
    </div>
  )
}

export default Navbar
