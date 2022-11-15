import { NavLink } from "react-router-dom"
import './AppBar.css'
const getClassName = ({ isActive }) => {
    return isActive ? `nav-item active` : `nav-item`
}

export const AppBar = () => {
    return (
        <div className="appbar">
            <nav>
                <NavLink className={getClassName} to="/" end> Home </NavLink>
                <NavLink className={getClassName} to="/movies">Movies</NavLink>       
            </nav>
            {/* <Outlet/> */}
        </div>
    )
}