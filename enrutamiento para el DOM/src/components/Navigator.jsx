import {NavLink} from "react-router-dom";
import "../styles/nav-bar.css";

export default function Navigator() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" className={({isActive})=> isActive ? 'active' : ''}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/counter" className={({isActive})=> isActive ? 'active' : ''}>Counter</NavLink>
        </li>
      </ul>
    </div>
  );
}
