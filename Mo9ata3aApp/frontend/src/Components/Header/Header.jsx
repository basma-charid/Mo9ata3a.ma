/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */

import { Link } from "react-router-dom";
import "./Header.style.css";
import { Zoom } from "react-reveal";


const Header = () => {
  return (
      <Zoom bottom>
    <div className="container-css">
      <div className="forOpa"></div>
      <img src="image.jfif" alt="some image" className="image"  />
      <div className="container container-2">
            <h1 className="title">Welcome to Mo9ata3a digital service  </h1>
            <p className="text-white fs-4">Here you can egalisate and demand papers as you want without any problem and any time with Mo9ata3a.ma</p>
      </div>
    </div>
      </Zoom>
  )
}

export default Header