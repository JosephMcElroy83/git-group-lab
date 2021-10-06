import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {

  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">SEI Post, Man!</NavLink>
        <div className="links">
          <NavLink className="link" to="/posts">Posts, Man</NavLink>
          <NavLink className="link" to="/add-post">Add Posts, Man</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Nav