import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topleft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <li className="toplistitem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="toplistitem"> <Link className="link" to="/">ABOUT</Link></li>
          <li className="toplistitem"> <Link className="link" to="/">CONTACT</Link></li>
          <li className="toplistitem"> <Link className="link" to="/write">WRITE</Link></li>
          <li className="toplistitem">
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress"
              alt=""
            />

          ) : (
            <ul className="toplist">
              <li className="toplistitem">
                <Link className="link" to="/login">LOGIN</Link></li>
              <li className="toplistitem">
                <Link className="link" to="/register">REGISTER</Link>
              </li>
            </ul>
          )}
        <i class="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
