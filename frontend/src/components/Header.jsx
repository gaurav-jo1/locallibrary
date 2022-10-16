import React, { useContext } from "react";
import ReactSwitch from "react-switch";
import {BsMoonFill, BsFillSunFill} from "react-icons/bs"
import "../styles/Header.scss"
import { ThemeContext } from "../Context/ThemeContextProvider";

const Header = () => {
  const {theme,toggleTheme} = useContext(ThemeContext)
  return (
    <div className={`Header_container_${theme}`}>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} checkedIcon={<BsMoonFill/>} uncheckedIcon={<BsFillSunFill className='sun_svg'/>}/>
    </div>
  )
}

export default Header