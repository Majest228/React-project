import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../Button/MyButton";
import { AuthContext } from "../../context";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="logo">
            <h1>Project by Majest </h1>
          </div>
          <nav className="navbar">
            <Link
              style={{
                textDecoration: "none",
                marginRight: 15,
                color: "black",
              }}
              to="/about"
            >
              О сайте
            </Link>
            <Link
              style={{
                textDecoration: "none",
                marginRight: 15,
                color: "black",
              }}
              to="/posts"
            >
              Посты
            </Link>
          </nav>
          <MyButton onClick={logout}>Exit</MyButton>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
