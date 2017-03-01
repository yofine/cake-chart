import React from 'react'

export default props => {
  return (
    <div className="main-nav">
      <a className="logo">
        <img src="https://chriswrightdesign.com/img/logo_cw.svg" />
      </a>
      <nav>
        <ul>
          <li>
            <a><span>地图</span></a>
          </li>
          <li>
            <a className="router-active"><span>词云</span></a>
          </li>
          <li>
            <a><span>饼图</span></a>
          </li>
          <li>
            <a><span>折线</span></a>
          </li>
          <li>
            <a><span>柱形</span></a>
          </li>
          <li>
            <a><span>雷达</span></a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
