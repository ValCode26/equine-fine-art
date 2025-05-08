import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import Logo from "@/components/Logo/Logo"; // Importă componenta Logo
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          {/* Adaugă logo-ul aici */}
          <div className="footer__logo">
            <Logo />
            <div className="footer__logo-text"></div>
          </div>

          <div className="footer__social">
            <a href="#" className="footer__social-link" aria-label="Instagram">
              <FaInstagram className="footer__social-icon" />
            </a>
            <a href="#" className="footer__social-link" aria-label="Facebook">
              <FaFacebook className="footer__social-icon" />
            </a>
            <a href="#" className="footer__social-link" aria-label="Twitter">
              <FaTwitter className="footer__social-icon" />
            </a>
          </div>
        </div>

        <div className="footer__copyright">
          <p>Valentin Borsan. All rights reserved.</p>
          <p>© {new Date().getFullYear()} Valentin Borsan Fine Equine Art</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
