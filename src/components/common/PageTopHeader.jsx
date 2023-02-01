import React from 'react'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import {  useNavigate } from "react-router-dom";
const PageTopHeader = ({title}) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex align-items-center justify-content-between mb-4 py-2 px-3">
          <h1 className="h6 mb-0 text-gray-800">{title}</h1>
    <BsFillArrowLeftCircleFill
      onClick={() => navigate(-1)}
      className="cursor "
      color="black"
      size={20}
    />
  </div>
  )
}

export default PageTopHeader