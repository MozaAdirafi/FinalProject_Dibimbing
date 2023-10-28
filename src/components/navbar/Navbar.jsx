import { useState, useEffect } from "react";

import "./navbar.css";
import avatar from "../../assets/images/avatar.png";
const Navbar = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  const [name, setName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");

    if (storedName) {
      setName(storedName);
    }
  }, []);

  return (
    <div className="navbar">
      <div className="navContainer">
        <a href="/">
          <span className="logo">Mooking</span>
        </a>
        <div className="navItems">
          {isAuthenticated ? (
            <div className="userMenuContainer">
              <div className="userMenu" onClick={toggleUserMenu}>
                <img src={avatar} alt="User Profile" className="profileImage" />
                <div className="userInfo">
                  <span className="userName">Hi, {name}</span>
                </div>
              </div>
              {showUserMenu && (
                <div className="dropdownMenu">
                  <a href="/user">List of Users</a>
                  <a href="/createcategory">Create Category</a>
                  <a href="/createpromo">Create promo</a>
                  <div className="divider"></div>
                  <a
                    href="/login"
                    onClick={() => {
                      localStorage.removeItem("token");
                      localStorage.removeItem("name");
                      localStorage.removeItem("role");
                    }}
                  >
                    Sign out
                  </a>
                </div>
              )}
            </div>
          ) : (
            <div>
              <a href="/register">
                <button className="navButton">Register</button>
              </a>
              <a href="/login">
                <button className="navButton">Login</button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
