import {Link, withRouter} from 'react-router-dom'

import {SiCodechef} from 'react-icons/si'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div>
      <nav className="navbar">
        <div className="header">
          <SiCodechef className="icon" />
          <h1 className="header-title">Tasty Kitchens</h1>
        </div>
        <ul className="blog-items">
          <Link className="nav-link" to="/">
            <li className="blog-list">Home</li>
          </Link>
          <Link className="nav-link" to="/cart">
            <li className="blog-list">cart</li>
          </Link>
          <button
            onClick={onClickLogout}
            className="logout-button"
            type="button"
          >
            Logout
          </button>
        </ul>
      </nav>
    </div>
  )
}

export default withRouter(Header)
