import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { Button, Menu, Dropdown } from "semantic-ui-react";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Menu.Menu position="right">
          <Menu.Item onClick={() => Auth.logout()}>Logout</Menu.Item>
        </Menu.Menu>
      );
    } else {
      return (
        <Menu.Menu position="right">
          <Menu.Item>
            <Link to="/quiz">Find Your Style</Link>
          </Menu.Item>
          <Menu.Item>
            <Dropdown text="Browse Art">
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/browse">
                  All Art
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="#">
                  Post-modernism
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="#">
                  Surrealism
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Item>
            <Link to="/signup">Signup</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/login">
              <Button className="primary">Log In</Button>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/test">
              <Button className="secondary text-dark">Take the Test</Button>
            </Link>
          </Menu.Item>
        </Menu.Menu>
      );
    }
  }

  return (
    <Menu secondary>
      <Menu.Item>
        <Link to="/">Deco</Link>
      </Menu.Item>
      {showNavigation()}
    </Menu>
  );
}

export default Nav;
