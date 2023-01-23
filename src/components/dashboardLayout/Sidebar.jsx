import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ item }) {
  if (item.children) {
    return (
      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          to="#"
          data-toggle="collapse"
          data-target={`#${item.UID}`}
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className={item.icon}></i>
          <span className="font-style">{item.title}</span>
        </Link>
        <div
          id={item.UID}
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            {item.children.map((c, i) => (
              <Link
                key={i}
                className="nav-link text-primary font-style-sub"
                to={`${c.link}`}
              >
                <i className={`${c.icon} text-dark mr-1`}></i>
                {c.title}
              </Link>
            ))}
          </div>
        </div>
      </li>
    );
  } else {
    return (
      <li className="nav-item">
        <Link className="nav-link " to={item.link}>
          <i className={item.icon}></i>
          <span className="font-style">{item.title}</span>
        </Link>
      </li>
    );
  }
}

export default Sidebar;
