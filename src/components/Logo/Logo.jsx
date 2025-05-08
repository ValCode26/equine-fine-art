import logoImage from "@/assets/images/logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <img
      src={logoImage}
      alt="Valentin Borsan Fine Equine Art"
      className="logo__image"
    />
  );
};

export default Logo;
