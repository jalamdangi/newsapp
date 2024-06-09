import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import EntertainmentNewsList from './EntertainmentNews'
import BusinessNews from './BusinessNews'

const Home = () => {
  const [newsData, setNewsData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/top-headlines?country=in&apiKey=3ce7385a10374b70a0ce2006bd17a3be',
        )
        const data = await response.json()
        console.log('News API Response:', data) // Log the response
        setNewsData(data.articles)
      } catch (error) {
        console.error('Error fetching news data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      {/* Top News Section */}
      <div className="top-news">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              {/* Carousel Component */}
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  {newsData.slice(0, 3).map((article, index) => (
                    <li
                      key={index}
                      data-target="#carouselExampleIndicators"
                      data-slide-to={index}
                      className={index === 0 ? 'active' : ''}
                    ></li>
                  ))}
                </ol>
                <div className="carousel-inner">
                  {newsData.slice(0, 3).map((article, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? 'active' : ''}`}
                    >
                      <img
                        className="d-block w-100"
                        src={article.urlToImage || '/images/modi.jpg'}
                        alt={`Slide ${index + 1}`}
                        height="500px"
                      />
                      <div className="carousel-caption d-md-block">
                        <h5 className="text-light">{article.title}</h5>
                        <p>...</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              {/* Rest of your code */}

              {/* Category Links Component */}
              <div className="row">
                <div className="col-md-6">
                  <NavLink to="/sportssnews">
                    <div style={{fontWeight:"bold",color:"red"}}>
                      <img
                        src="images/sport.jpg"
                        width={300}
                        height={250}
                        className="responsive"
                        alt="Sports"
                      />
                      <div>
                        <NavLink to="/sportssnews">Sports News</NavLink>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div className="col-md-6">
                  <NavLink to="/entertainmentsnews">
                    <div style={{ marginLeft: '3rem' }}>
                      <img
                        width={300}
                        height={250}
                        src="images/entertainment.jpg"
                        className="responsive"
                        alt="Entertainment"
                      />
                      <div style={{fontWeight:"bolder",color:"red"}}>
                        <NavLink to="/entertainmentsnews">
                          Entertainment News
                        </NavLink>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div className="col-md-6">
                  <NavLink to="/technews">
                    <div>
                      <img
                        width={300}
                        height={200}
                        src="images/tech1.jpg"
                        className="responsive"
                        alt="Tech"
                      />
                      <div style={{fontWeight:"bolder",color:"red"}}>
                        <NavLink to="/sportssnews">Tech News</NavLink>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div className="col-md-6">
                  <NavLink to="/businessnews">
                    <div style={{ marginLeft: '3rem' }}>
                      <img
                        width={300}
                        height={200}
                        src="images/business.jpg"
                        className="responsive"
                        alt="Business"
                      />
                      <div style={{fontWeight:"bolder",color:"red"}}>
                        <NavLink to="/businessnews">Business News</NavLink>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* You can create separate components for each category section if needed */}
      <div className="cat-news">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h2>Sports</h2>
              <div className="row cn-slider">
                <div className="col-md-6">
                <a href="sportssnews"> <div className="cn-img">
                   <img src="images/sport.jpg" alt="Sports" /> 
                    <div className="cn-title">
                      <a href="sportssnews">Latest Sports News</a>
                    </div>
                  </div> </a>
                </div>
                <div className="col-md-6">
                <a href="sportssnews"> <div className="cn-img">
                    <img src="images/sports2.jpg" alt="Sports" />
                    <div className="cn-title">
                      <a href="sportssnews">Explore Different Newses</a>
                    </div>
                  </div> </a>
                </div>
                <div className="col-md-6">
                <a href="sportssnews"><div className="cn-img">
                    <img src="images/sports3.jpg" alt="Sports" />
                    <div className="cn-title">
                      <a href="sportssnews">Click Here For More</a>
                    </div>
                  </div> </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h2>Technology</h2>
              <div className="row cn-slider">
                <div className="col-md-6">
                <a href="technews">  <div className="cn-img">
                    <img src="images/technew.jpg" alt="Tech" />
                    <div className="cn-title">
                      <a href="technews">Latest Tech News</a>
                    </div>
                  </div> </a>
                </div>
                <div className="col-md-6">
                <a href="technews"> <div className="cn-img">
                    <img src="images/tech3.jpg" alt="Tech" />
                    <div className="cn-title">
                      <a href="technews">Explore Tech Here</a>
                    </div>
                  </div> </a>
                </div>
                <div className="col-md-6">
                <a href="technews"> <div className="cn-img">
                    <img src="images/tech1.jpg" alt="Tech" />
                    <div className="cn-title">
                      <a href="technews">Click Here For More</a>
                    </div>
                  </div> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Business and Entertainment Sections */}
      {/* You can create separate components for each category section if needed */}
      <div className="cat-news">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h2>Business</h2>
              <div className="row cn-slider">
                <div className="col-md-6">
                <a href="businessnews"> <div className="cn-img">
                    <img src="images/business.jpg" alt="Business" />
                    <div className="cn-title">
                      <a href="businessnews">Latest Business News</a>
                    </div>
                  </div> </a>
                </div>
                <div className="col-md-6">
                <a href="businessnews"> <div className="cn-img">
                    <img src="images/business2.jpg" alt="Business" />
                    <div className="cn-title">
                      <a href="businessnews">Explore Business Newses</a>
                    </div>
                  </div> </a>
                </div>
                <div className="col-md-6">
                <a href="businessnews"><div className="cn-img">
                    <img src="images/business3.jpg" alt="Business" />
                    <div className="cn-title">
                      <a href="businessnews">Click Here For More</a>
                    </div>
                  </div> </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h2>Entertainment</h2>
              <div className="row cn-slider">
               <div className="col-md-6">
               <a href="entertainmentsnews"><div className="cn-img">
                    <img src="images/entertainment.jpg" alt="Entertainment" />
                    <div className="cn-title">
                      <a href="entertainmentsnews">
                        Latest Bollywood Newses
                      </a>
                    </div>
                  </div> </a>
                </div>
                <div className="col-md-6">
                <a href="entertainmentsnews"> <div className="cn-img">
                    <img src="images/entertainment2.jpg" alt="Entertainment" />
                    <div className="cn-title">
                      <a href="entertainmentsnews">
                        Explore Entertainment News
                      </a>
                    </div>
                  </div> </a>
                </div>
                <div className="col-md-6">
                <a href="entertainmentsnews"> <div className="cn-img">
                    <img src="images/entertainment3.webp" alt="Entertainment" />
                    <div className="cn-title">
                      <a href="entertainmentsnews">Click Here For More</a>
                    </div>
                  </div> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main News Section */}
      <div className="main-news">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-md-4">
                <a href="covidstatus"> <div className="mn-img">
                    <img src="images/newcovid.jpg" alt="Covid" />
                    <div className="mn-title">
                      <a href="covidstatus">
                        Check Current Covid Situation
                      </a>
                    </div>
                  </div> </a>
                </div>
                <div className="col-md-4">
                <a href="healthnews"> <div className="mn-img">
                    <img src="images/health.jpg" alt="Health" />
                    <div className="mn-title">
                      <a href="healthnews">Health Related News</a>
                    </div>
                  </div> </a>
                </div>
                <div className="col-md-4">
                <a href="scientificnews">  <div className="mn-img">
                    <img src="images/science.jpg" alt="Science" />
                    <div className="mn-title">
                      <a href="scientificnews">Science Related News</a>
                    </div>
                  </div> </a>
                </div>
                <div className="col-md-4">
                <a href="ourteam"> <div className="mn-img">
                    <img src="images/team.jpg" alt="Our Team" />
                    <div className="mn-title">
                      <a href="ourteam">Our Team</a>
                    </div>
                  </div> </a>
                </div>
                <div className="col-md-4">
                <a href="aboutus"> <div className="mn-img">
                    <img src="images/about.jpg" alt="About Us" />
                    <div className="mn-title">
                      <a href="aboutus">About Us</a>
                    </div>
                  </div> </a>
                </div>
                <div className="col-md-4">
                <a href="contactus"> <div className="mn-img">
                    <img src="images/contact.webp" alt="Contact Us" />
                    <div className="mn-title">
                      <a href="contactus">Contact Us</a>
                    </div>
                  </div> </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="mn-list">
                <h2>Read More</h2>
                <ul>
                  <li>
                    <a href="sportssnews">Latest sports news</a>
                  </li>
                  <li>
                    <a href="technews">Latest tech news</a>
                  </li>
                  <li>
                    <a href="businessnews">Latest business news</a>
                  </li>
                  <li>
                    <a href="entertainmentsnews">
                      Latest entertainment news
                    </a>
                  </li>
                  <li>
                    <a href="healthnews">Latest health news</a>
                  </li>
                  <li>
                    <a href="scientificnews">Latest scientific news</a>
                  </li>
                  <li>
                    <a href="breakingnews">Latest breaking news</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
