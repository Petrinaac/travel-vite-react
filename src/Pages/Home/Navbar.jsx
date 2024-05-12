import "./NavbarStyle.css"
import data from "../../data/index.json"
import { useState } from 'react';

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const toggleClick = () => {
    setClicked(!clicked)
  }

  return (
    <nav className="navbar">
      <div className="navbar-items">
        <h1 className="navbar-logo">CzTravel</h1>
        <div className="mobile-icon">
          <i className={clicked ? "fas fa-times" : "fas fa-bars"} onClick={toggleClick}></i>
        </div>
        <ul className={clicked ? "navbar-ul active" : "navbar-ul"}>
        {data?.menuItems?.map((item,index) => {
          return (
            <div key={index}>
            <li>
              <a href={item.url} className={item.class}>{item.title}</a>
            </li>
          </div>
          );
        })}
        <a className="btn">Sign up</a>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;