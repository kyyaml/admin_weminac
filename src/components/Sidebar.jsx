import { useEffect } from 'react'
import { NavLink } from 'react-router-dom';


export default function Sidebar() {
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach((e) => e.addEventListener(type, listener));
    } else {
      select(el, all).addEventListener(type, listener);
    }
  };

  useEffect(() => {
    const toggleSidebar = () => {
      select('body').classList.toggle('toggle-sidebar');
    };

    if (select('.toggle-sidebar-btn')) {
      on('click', '.toggle-sidebar-btn', toggleSidebar);
    }

    return () => {
      if (select('.toggle-sidebar-btn')) {
        select('.toggle-sidebar-btn').removeEventListener('click', toggleSidebar);
      }
    };
  }, );
  return (
    <>
<aside id="sidebar" className="sidebar">
<ul className="sidebar-nav" id="sidebar-nav">

      <li className="nav-item">
        <NavLink className="nav-link " to="/dashboard">
          <i className="bi bi-grid"></i>
          <span>Dashboard</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-layout-text-window-reverse"></i><span>Data</span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <NavLink to="/poli">
              <i className="bi bi-circle"></i><span>Poli</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dokter">
              <i className="bi bi-circle"></i><span>Dokter</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/layanan">
              <i className="bi bi-circle"></i><span>Layanan</span>
            </NavLink>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
    </>
  )
}
