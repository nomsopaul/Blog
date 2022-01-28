import { useContext } from 'react';
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";



export default function Topbar() {
  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
  }
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
          <li className="toplistitem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img
              className="topImg"
              src={PF + user.profilePic}
              alt=""
            />
          </Link>

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
