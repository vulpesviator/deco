import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import Auth from "../../utils/auth";
import Categories from "../../pages/Categories";
import { Link } from "react-router-dom";
import { Button, Menu, Dropdown } from "semantic-ui-react";
import NavLg from "../NavLg";
import NavMb from "../NavMb";

export default function Nav() {
  const [activeItem,setactiveItem]=useState("home");

  const handleItemClick = (e, { name }) => setactiveItem(name);

  const renderLinks = () => {
    if (Auth.loggedIn()) {
      return (
        <>
          <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={handleItemClick}
              >
                <img src="deco.svg"  alt="" />
              </Menu.Item>
              
              <Menu.Item
                position='right'
              >
                <Dropdown text="Browse Art">
                  <Dropdown.Menu>
                  
                    <Dropdown.Item as={Link} to="/browse">
                      All Art
                    </Dropdown.Item>
                     
                      <Categories />
                      
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
              
              
              <Menu.Item
                name='logout'
                active={activeItem === 'logout'}
                onClick={handleItemClick}
                position='right'
              >
                <Button className="primary">
                  Logout
                </Button>
              </Menu.Item>
              <Menu.Item
                name='quiz'
                active={activeItem === 'quiz'}
                onClick={handleItemClick}
                position='right'
              >
                <Button className="secondary text-dark">
                  Take the Test
                </Button>
              </Menu.Item>
        </>
      );
    } else {
      return (
        <>
          <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={handleItemClick}
              >
                <img src="deco.svg"  alt="" />
              </Menu.Item>
              <Menu.Menu position="right">
              <Menu.Item>
                <Dropdown text="Browse Art">
                  <Dropdown.Menu>
                  
                    <Dropdown.Item as={Link} to="/browse">
                      All Art
                    </Dropdown.Item>
                     
                      <Categories />
                      
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
              
              <Menu.Item
                name='signup'
                active={activeItem === 'signup'}
                onClick={handleItemClick}
              />
              <Menu.Item
                name='login'
                active={activeItem === 'login'}
                onClick={handleItemClick}
              >
                <Button className="primary">
                  Log In
                </Button>
              </Menu.Item>
              <Menu.Item
                name='quiz'
                active={activeItem === 'quiz'}
                onClick={handleItemClick}
              >
                <Button className="secondary text-dark">
                  Take the Test
                </Button>
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