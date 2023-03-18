import styles from "./css/Nav.module.css";
import navList from "./NavList";
import { Link } from "react-router-dom";
import { MdMovieFilter } from "react-icons/md";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";

function Nav() {
  return (
    <div className={styles.nav}>
      <nav>
        <div className={styles.logo}>
          <Link to="/react-movie/" className={styles.logo_title}>
            <MdMovieFilter />
            Moect
          </Link>
        </div>
        <ul className={styles.menus}>
          {navList.map(({ title, path }) => {
            return (
              <li className={styles.menu}>
                <Link to={`/page/${path}/1`} className={styles.nav_menu}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className={styles.sns}>
          <li className={styles.sns_logo}>
            <a href="https://ko-kr.facebook.com/" style={{ color: "#3B5998" }}>
              <AiFillFacebook />
            </a>
          </li>
          <li className={styles.sns_logo}>
            <a href="https://twitter.com/?lang=ko" style={{ color: "#00ACEE" }}>
              <AiFillTwitterCircle />
            </a>
          </li>
          <li className={styles.sns_logo}>
            <a href="https://www.instagram.com/" style={{ color: "#DE534D" }}>
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Nav;
