import React, { useState } from "react";
import Auth from "../../utils/auth";
import Categories from "../../pages/Categories";
import { Link } from "react-router-dom";
import { Button, Grid, Menu, Dropdown, Responsive } from "semantic-ui-react";

function Nav() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  function toggleSidebar() {
    setSidebarVisible(!sidebarVisible);
  }

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
              <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                <Dropdown.Item as={Link} to="/browse">
                  All Art
                </Dropdown.Item>
                </Responsive>
                {/* <Dropdown.Item as={Link} to="#">
                  Post-modernism
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="#">
                  Surrealism
                </Dropdown.Item> */}
                 <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                  <Categories />
                  </Responsive>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Item>
            <Link to="/signup">Signup</Link>
          </Menu.Item>
          <Menu.Item>
            <Button as={Link} to="/login" className="primary">
              Log In
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button as={Link} to="/test" className="secondary text-dark">
              Take the Test
            </Button>
          </Menu.Item>
        </Menu.Menu>
      );
    }
  }

  return (
    <Grid>
      <Grid.Column>
        <Menu secondary>
          <Menu.Item onClick={toggleSidebar}>
            <Button icon="bars" />
          </Menu.Item>
          <Menu.Item>
            <Link to="/">Deco</Link>
          </Menu.Item>
          <Responsive
            as={React.Fragment}
            minWidth={Responsive.onlyTablet.minWidth}
          >
            {showNavigation()}
          </Responsive>
        </Menu>
      </Grid.Column>

      <Responsive
        as={React.Fragment}
        maxWidth={Responsive.onlyTablet.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="overlay"
          direction="right"
          visible={sidebarVisible}
          onHide={() => setSidebarVisible(false)}
        >
          {showNavigation()}
        </Sidebar>
      </Responsive>
    </Grid>
  );
}

export default Nav;
