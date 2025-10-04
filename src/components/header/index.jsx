import "./styles.css";
import companyLogo from "../../assets/images/company-logo.png";

function Header() {
  return (
    <header>
      <div className="row align-items-center">
        <div className="col-lg-3">
          <a href="#" className="logo">
            <img src={companyLogo} alt="company-logo" />
          </a>
        </div>
        <div className="col-lg-9">
          <div className="nav-wrapper">
            <div className="navlinks-wrapper">
              <a href="#" className="navlink">
                Home
              </a>
              <a href="#" className="navlink">
                About
              </a>
              <a href="#" className="navlink">
                Services
              </a>
              <a href="#" className="navlink">
                Why Choose Us
              </a>
              <a href="#" className="navlink">
                Portfolio
              </a>
              <a href="#" className="navlink">
                Products
              </a>
              <a href="#" className="navlink">
                Testimonial
              </a>
              <a href="#" className="navlink">
                Technologies
              </a>
              <a href="#" className="navlink">
                Contact
              </a>
            </div>
            <a href="tel:+1 (800) 826-8018" className="header-btn">
              <i className="fa-solid fa-phone"></i>
              +1 (800) 826-8018
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
