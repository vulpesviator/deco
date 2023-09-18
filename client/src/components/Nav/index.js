import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import Auth from "../../utils/auth";
// import Categories from "../../pages/Categories";
import { Link } from "react-router-dom";
import { Button, Menu, Image } from "semantic-ui-react";
import NavLg from "../NavLg";
import NavMb from "../NavMb";
import Logo from "../../assets/deco.png"

export default function Nav() {
  

  const renderLinks = () => {
    if (Auth.loggedIn()) {
      return (
        <>
          <Menu.Item
            name="home"
            as={Link}
            to="/"
            fitted
          >
            <Image src={Logo} alt="deco" height="50px"/>
          </Menu.Item>
          
          <Menu.Menu position="right">
          <Menu.Item 
              name="AboutUs"
              as={Link}
              to="/AboutUs"
            />

            <Menu.Item
              name="categories"
              as={Link}
              to="/categories"
            />

            
            <Menu.Item
              name="profile"
              as={Link}
              to="/profile"
            >
              <Button className="primary">Profile</Button>
            </Menu.Item>
            <Menu.Item
              name="quiz"
              as={Link}
              to="/quiz"
            >
              <Button className="secondary text-dark">Take the Test</Button>
            </Menu.Item>
          </Menu.Menu>
        </>
      );
    } else {
      return (
        <>
        
          <Menu.Item
            name="home"
            as={Link}
            to="/"
          >
            <img src={Logo} alt="" />

          </Menu.Item>
          <Menu.Item   position="right"
              name="AboutUs"
              as={Link}
              to="/AboutUs"
            />

          <Menu.Menu>
            <Menu.Item
              name="categories"
              as={Link}
              to="/categories"
            />

            <Menu.Item
              name="signup"
              as={Link}
              to="/signup"
            />
            <Menu.Item
              name="login"
              as={Link}
              to="/login"
            >
              <Button className="primary">Log In</Button>
            </Menu.Item>
          </Menu.Menu>
        </>
      );
    }
  };
  
  const none =useMediaQuery({ query: "(max-width:576px)" }) 
  const sm = useMediaQuery({ query: "(min-width:576px)" })
  const md = useMediaQuery({ query: "(min-width:768px)" })
  const lg = useMediaQuery({ query: "(min-width:992px)" })
  const xl = useMediaQuery({ query: "(min-width:1200px)" })
  const xxl = useMediaQuery({ query: "(min-width:1400px)" })
  const size = {none,sm,md,lg,xl,xxl}

  return (
    <>
        {size.sm ? <NavLg renderLinks={renderLinks}/> : <NavMb renderLinks={renderLinks}/> }
    </>
  )
};