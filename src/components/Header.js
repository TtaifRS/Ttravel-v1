import React from "react"
import { Nav, NavLink, Bars, NavMenu, NavBtn } from "../styles/HeaderStyle"
import { menuDatas } from "../data/menuData"
import { Btn } from "../styles/ButtonStyle"

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">Ttravel</NavLink>
      <Bars />
      <NavMenu>
        {menuDatas.map((menuData, index) => (
          <NavLink to={menuData.url} key={index}>
            {menuData.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Btn primary="true" rounded="true" to="/trips">
          Book a trip
        </Btn>
      </NavBtn>
    </Nav>
  )
}

export default Header
