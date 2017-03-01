import React from 'react'
import TypeSelector from './components/TypeSelector'
import Configuration from './components/Configuration'
import Chart from './components/Chart'
import './cake.css'

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
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
        <div className="main-content flex">
          <div className="data-view">
          </div>
          <div className="chart-view">
          </div>
          <div className="configurar-view">
          </div>
        </div>
      </div>
    )
  }
}
