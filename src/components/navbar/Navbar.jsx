import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Menu
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/alok-kumar-gupta-2075b5257/">
            <img src="\LinkedIn.webp" alt="" id="linkedIn"/>
          </a>
          <a href="https://github.com/alok2424">
            <img src="/github2.webp" alt="" />
          </a>
          <a href="https://twitter.com/Alok679166">
            <img src="/Twitter2.webp" alt="" />
          </a>
          <a href="https://www.instagram.com/web3.0wonders/">
            <img src="/instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
