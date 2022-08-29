import Logo from "../../assets/images/logo.svg";
import User from "../../assets/images/user.png";
import { BsChevronDown } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import "./Header.scss";
import { useAuth } from "../../Hooks/useAuth";

export const Header = () => {
  const { setToken } = useAuth();

  return (
    <header className="poppins">
      <div className="container">
        <div className="header-inner">
          <a className="header-logo" href="/">
            <img src={Logo} alt="site logo" width="96" height="36" />
          </a>

          <nav className="header-nav">
            <ul className="header-list">
              <li className="header-item">
                <NavLink to={"/"} className={" header-link"}>
                  Bosh sahifa
                </NavLink>
              </li>
              <li className="header-item">
                <NavLink to={"/books"} className={" header-link"}>
                  Kitoblar
                </NavLink>
              </li>
              <li className="header-item">
                <NavLink to={"/s"} className={" header-link"}>
                  Nazm
                </NavLink>
              </li>
              <li className="header-item">
                <NavLink to={"/d"} className={" header-link"}>
                  Maqola
                </NavLink>
              </li>
              <li className="header-item">
                <NavLink to={"/u"} className={" header-link"}>
                  Forum
                </NavLink>
              </li>
            </ul>
          </nav>

          <span className="header-user">
            <span>
              <img src={User} alt="settingsImg" className="user-photo" />
            </span>
            <BsChevronDown />

            <ul className="user-panel">
              <li className="user-set">
                <Link to={"/addBook"}>Kitob qo'shish</Link>
              </li>
              <li className="user-set">
                <Link to={"/addAuthor"}>Avtor qo'shish</Link>
              </li>
              <li className="user-set">
                <Link to={"/v"}>Sozlamalar</Link>
              </li>
              <li className="user-set">
                <button
                  onClick={() => {
                    setToken("");
                  }}
                >
                  Log out
                </button>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </header>
  );
};
