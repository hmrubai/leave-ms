import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
const PageTopHeader = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex align-items-center justify-content-between mb-4 py-2 px-3">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/dashboard/">
            <BiHomeAlt className="mr-1 mb-1" />
            Home
          </Link>
        </Breadcrumb.Item>

        <Breadcrumb.Item active>{title}</Breadcrumb.Item>
      </Breadcrumb>
      <BsFillArrowLeftCircleFill
        onClick={() => navigate(-1)}
        className="cursor "
        color="black"
        size={20}
      />
    </div>
  );
};

export default PageTopHeader;
