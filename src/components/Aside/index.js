import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

export default props => {
  const { routes, logoImage } = props
  return (
    <div className="main-nav">
      <a className="logo">
        <img src={logoImage} />
      </a>
      <nav>
        <ul>
          {routes[0].childRoutes.map(e => {
            const activeClass = classNames({
              'router-active': e.path == routes[1].path
            })
            return (
              <li key={e.path}>
                <Link className={activeClass} to={e.path}><span>{e.display}</span></Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
