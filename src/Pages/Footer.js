import React from 'react';

const Footer = () => {
  return (
    <div>
      {/* Footer Start */}
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h3 className="title">Get in Touch</h3>
                <div className="contact-info">
                  <p><i className="fa fa-map-marker"></i>462038 Bhopal MP</p>
                  <p><i className="fa fa-envelope"></i>vikramofficial63@gmail.com</p>
                  <p><i className="fa fa-phone"></i>8889490358</p>
                  <div className="social">
                    <a href=""><i className="fab fa-twitter"></i></a>
                    <a href=""><i className="fab fa-facebook-f"></i></a>
                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                    <a href=""><i className="fab fa-instagram"></i></a>
                    <a href=""><i className="fab fa-youtube"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h3 className="title">Useful Links</h3>
                <ul>
                  <li><a href="/breakingnews">Top Headlines</a></li>
                  <li><a href="/sportssnews">Sports News</a></li>
                  <li><a href="/businessnews">Business News</a></li>
                  <li><a href="/technews">Tech News</a></li>
                  <li><a href="/healthnews">Health News</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h3 className="title">Quick Links</h3>
                <ul>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Contact us </a></li>
                  <li><a href="#">Our team</a></li>
                  <li><a href="#">Feedback</a></li>
                  <li><a href="#">Covid status</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h3 className="title">Newsletter</h3>
                <div className="newsletter">
                  <p>
                    News jumbo is a news aggregator web application where you can read different types of news and also explore other useful content....
                  </p>
                  <form>
                    <input className="form-control" type="email" placeholder="Your email here" />
                    <button className="btn">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Footer Menu Start */}
      <div className="footer-menu">
        <div className="container">
          <div className="f-menu">
            <a href="">About Us</a>
            <a href="">Contact Us</a>
            <a href="">Privacy Policy</a>
            <a href="">Accessibility help</a>
            <a href="">Advertise with us</a>
            <a href="">Feedback</a>
          </div>
        </div>
      </div>
      {/* Footer Menu End */}

      {/* Footer Bottom Start */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 copyright">
              <p>Copyright @2022 All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom End */}

      {/* Back to Top */}
      <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
    </div>
  );
};

export default Footer;
