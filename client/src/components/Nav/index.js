import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import Auth from "../../utils/auth";
// import Categories from "../../pages/Categories";
import { Link } from "react-router-dom";
import { Button, Menu, Dropdown } from "semantic-ui-react";
import NavLg from "../NavLg";
import NavMb from "../NavMb";

export default function Nav() {
  

  const renderLinks = () => {
    if (Auth.loggedIn()) {
      return (
        <>
          <Menu.Item
            name="home"
            as={Link}
            to="/"
          >
            <img src="deco.svg" alt="" />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              name="categories"
              as={Link}
              to="/browse"
            />

            
            <Menu.Item
              name="profile"
              as={Link}
              to="/profile"
            >
              <Button className="primary">username's Profile</Button>
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
            <img src="deco.svg" alt="" />
          </Menu.Item>
          <Menu.Menu position="right">
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