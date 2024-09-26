import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footer-social">
        <FaSquareXTwitter />
        <FaFacebook />
        <FaInstagramSquare />
        <FaLinkedin />
      </div>
      <div className="footer">
        Copyright © Burger45.com 2024. Tüm hakları saklıdır.{" "}
      </div>
    </div>
  );
};

export default Footer;
