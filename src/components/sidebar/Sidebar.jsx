import "./sidebar.css"

export default function Sidebar() {
    return (
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipis. Ut enim ad minim
            veniam. Voluptate quis voluptate vel necessitatibus nostrum illum
            dolor sit amet
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">LifeStyle</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Fashion</li>
            <li className="sidebarListItem">Sports</li>
            <li className="sidebarListItem">Technology</li>
            <li className="sidebarListItem">Movies</li>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
          </div>
        </div>
      </div>
    );
}
