import React from 'react'
import TypeSelector from './components/TypeSelector'
import Configuration from './components/Configuration'
import Chart from './components/Chart'
import './index.css'

export default class App extends React.Component {
  render() {
    return (
      <div id="flex-container">
        <header></header>
        <main>
          <aside>
            <i className="fa fa-bars"></i>
            <i className="fa fa-home"></i>
            <i className="fa fa-search"></i>
            <i className="fa fa-user"></i>
            <i className="fa fa-cog"></i>
            <i className="fa fa-soundcloud"></i>
          </aside>
          <section className="content">
          </section>
        </main>
      </div>
    )
  }
}
