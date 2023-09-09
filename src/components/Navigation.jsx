
import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (
      <ul className='nav'>
        <li><NavLink to='/home'>Home</NavLink></li>
        <li><NavLink to='/popular'>Popular</NavLink></li>
        <li><NavLink to='/battle'>Battle</NavLink></li>
      </ul>
    )
}

export default Navigation;