import React from "react";
import Container from "../container/Container";
import authService from "../../appwrite/config";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Header() {
  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
