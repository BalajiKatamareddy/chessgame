import { NavLink } from "react-router-dom";
function Menu()
{
    return(
       
        <nav className="p">
        <span class="style">l</span>
        <NavLink to="/"id="l" >Home </NavLink>
        <NavLink to="/about"id="m" >About </NavLink>
        <NavLink to="/rules"id="n" >Rules of The Chess </NavLink>
        <NavLink to="/ChessBoard"id="n" >StartGame </NavLink>
        </nav>
    )
}
export default Menu;