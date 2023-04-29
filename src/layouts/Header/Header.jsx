import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { FaUserSecret } from "react-icons/fa";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <h2>this is Header</h2>
        <p>Journalisum Without fair / favor</p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee speed={133} pauseOnHover>
          amet consectetur adipisicing elit. Debitis consequatur quod temporibus
          ipsa....adipisicing elit. Debitis consequatur quod temporibus ipsa
        </Marquee>
      </div>
      
    </Container>
  );
};

export default Header;
