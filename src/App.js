import React from 'react'
import Configurar from './components/Configurar'
import Chart from './components/Chart'
import Aside from './components/Aside'
import Data from './components/Data'
import './cake.css'

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Aside />
        <div className="main-content flex">
          <Data />
          <div className="chart-view">
          </div>
          <div className="configurar-view">
          </div>
        </div>
      </div>
    )
  }
}
