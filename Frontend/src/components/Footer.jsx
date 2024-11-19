import React from 'react';
import '../styles/footer.css'

const Footer = () => {
  return (
    <>
    <footer className="footer-container">
      <div className="footer-sections">
        {/* South Zone */}
        <div className="footer-column">
          <h3 className="footer-title">SOUTH ZONE</h3>
          <hr />
          <ul>
            <li>Thiruvananthapuram</li>
            <li>Kollam</li>
            <li>Pathanamthitta</li>
            <li>Alappuzha</li>
            <li>Kottayam</li>
          </ul>
        </div>

        {/* Central Zone */}
        <div className="footer-column">
          <h3 className="footer-title">CENTRAL ZONE</h3>
          <hr />
          <ul>
            <li>Idukki</li>
            <li>Ernakulam</li>
            <li>Thrissur</li>
            <li>Palakkad</li>
            <li>S.E.A.R.C.</li>
          </ul>
        </div>

        {/* North Zone */}
        <div className="footer-column">
          <h3 className="footer-title">NORTH ZONE</h3>
          <hr />
          <ul>
            <li>Malappuram</li>
            <li>Kozhikode</li>
            <li>Wayanad</li>
            <li>Kannur</li>
            <li>Kasargod</li>
          </ul>
        </div>

        {/* Help Desk */}
        <div className="footer-column">
          <h3 className="footer-title">HELP DESK</h3>
          <hr />
          <ul>
            <li>PH: 0471-2322825</li>
            <li>Mob: 9447178000</li>
            <li>Mail: cru.excise@kerala.gov.in</li>
            <li>Fax: 0471-2332073</li>
            <li>IT Cell: 0471-2335568</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2024 Kerala Excise</p>
        <p>
          Powered by Kerala State Excise | Designed and Maintained by Aswin Thulasi R, ICT Academy of Kerala, Thiruvananthapuram.
        </p>
      </div>
    </footer>
    </>
  );
};

export default Footer;
