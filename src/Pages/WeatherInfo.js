import React, { useState, useEffect } from 'react';

const WeatherInfo = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const city = 'bhopal';
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=363f6d888554e530d23cde08102878e2`);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <style>
        {`#exampleModalCenter .cmn{font-size: 25px; color: black; padding: 12px;}
          #exampleModalCenter h5{font-family: cursive; color: black; font-weight: bold;}
          .weathertop{display: flex; background-color: whitesmoke;}
          .weathericon, .weathermood{border: 0px solid black; width: 50%;}
          .weathermood p{display: flex; align-items: center; padding-top: 20px; font-size: 25px;}
          .one , .two{display: flex; background-color: whitesmoke; justify-content: space-around;}
          .ione, .itwo{border: 0px solid black; width: 50%;}
          #exampleModalCenter p{padding-left: 14px;}`}
      </style>

      {/* Button trigger modal */}
      <div style={{ textAlign: 'center' }}>
        <button type="button" className="btn" data-toggle="modal" data-target="#exampleModalCenter" style={{ backgroundColor: 'teal' }}>
          <span style={{ fontFamily: 'cursive' }}> Check Weather Info</span>
          <i className="fas fa-cloud-sun" style={{ fontSize: '21px' }}></i>
        </button>
      </div>

      {/* Modal */}
      {weatherData && (
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  {weatherData.name} Weather:
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="weathertop">
                  <div className="weathericon" id="bigicon" style={{ fontSize: '35px', paddingTop: '10px', paddingLeft: '10px' }}>
                    {(() => {
                      const weatherMood = weatherData.weather[0].main;
                      const hour = new Date().getHours();

                      if (hour >= 7 && hour <= 18) {
                        return weatherMood === 'Clear' ? <i className="fas fa-sun"></i> : <i className="fas fa-cloud-sun"></i>;
                      } else if (hour >= 19 || hour <= 6) {
                        return weatherMood === 'Clear' ? <i className="fa fa-moon"></i> : <i className="fas fa-cloud-moon"></i>;
                      }

                      return null;
                    })()}
                  </div>
                  <div className="weathermood" id="bigicon" style={{ fontSize: '45px' }}>
                    <p>{weatherData.weather[0].main}</p>
                  </div>
                </div>
                <div className="one">
                  <div className="ione">
                    <i className="fa fa-sun cmn"></i>Temperature
                    <p>{weatherData.main.temp}&#8451;</p>
                  </div>
                  <div className="itwo">
                    <i className="fas fa-smog cmn"></i>Humidity
                    <p>{weatherData.main.humidity}%</p>
                  </div>
                </div>
                <div className="two">
                  <div className="ione">
                    <i className="fa fas fa-cloud-rain cmn"></i>Pressure
                    <p>{weatherData.main.pressure}mBar</p>
                  </div>
                  <div className="itwo">
                    <i className="fas fa-wind cmn"></i>Wind
                    <p>{weatherData.wind.speed}km/h</p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
