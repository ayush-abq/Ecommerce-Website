import React from "react";
import "./Footer.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="Footer-row">
          {/* Column1 */}
          <div className="col">
            <h4>CUSTOMER SERVICE</h4>
            <ui className="list-unstyled">
              <li>Contact Us</li>
              <li>Track Order</li>
              <li>Return Order</li>
              <li>Cancel Order</li>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>COMPANY</h4>
            <ui className="list-unstyled" >
              <li>About Us</li>
              <li>We're Hiring</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>CONNECT WITH US</h4>
            <ui className="list-unstyled">
              <li><FacebookIcon/></li>
             <li><InstagramIcon/></li> 
              <li><TwitterIcon/></li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-tos">
            &copy;{new Date().getFullYear()} STUDIO21. | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
