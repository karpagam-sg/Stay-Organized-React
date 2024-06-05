import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export default function sidebar() {
  return (
    <div className="col-md-3 col-lg-2 d-none d-md-block sidebar bg-light">
      <nav id="sidebarMenu">
        <div className="sidebarheight">
          <div className="pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link active text-dark" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-dark" to="/newuser">
                  Create New User
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link text-dark dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLinksidebar"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tasks &nbsp;<span className="arrow"></span>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-light"
                  id="menuitemid"
                  aria-labelledby="navbarDarkDropdownMenuLinksidebar"
                  style={{ border: 0 }}
                >
                  <li>
                    <a className="dropdown-item" id="newtaskid" href="/newtask">
                      Create New Task
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      id="viewtaskid"
                      href="/viewtask"
                    >
                      View by User
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
