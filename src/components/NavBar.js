import React from "react";
import { Container, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { ROOT_PATH } from "../utils/contants";

function NavBar() {
  return (
    <div>
      <Menu fixed="top" inverted style={{ backgroundColor: "blue" }}>
        <Container>
          <Menu.Item as={Link} to={ROOT_PATH}>
            Accueil
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
}

export default NavBar;
