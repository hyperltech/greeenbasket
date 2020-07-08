import React from "react";
import '../footer.css';

function Footer() {
  return (
  <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Basket.com <i>A COMPLETE GROCERY SHOP </i> is an initiative  to help the upcoming programmers with the code. Basket.com  focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>

          <div className="col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="#">Fruits</a></li>
              <li><a href="#">Vegetables</a></li>
              <li><a href="#">PHP</a></li>
              <li><a href="#">Java</a></li>
              <li><a href="#">Android</a></li>
              <li><a href="#">Templates</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Contribute</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 ">
            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
            <a href="/">Basket.com </a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
          <div className="col-md-4 col-sm-6">
            <ul className="payment-icons">
              <li><img src="../public/images/visa.png" className="visa" ></img></li>
              <li><img className="masrter-card" src="#"></img></li>
              <li><img className="rupay" src="#"></img></li>
              <li><img className="paytm" src="#"></img></li>   
              <li><img className="maestro" src="#"></img></li>   
              <li><img className="bhim-upi" src="#"></img></li>
            </ul>
          </div>

        </div>
      </div>
  </footer>
          
        
  );
}

export default Footer;