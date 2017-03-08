import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Aside from './components/Aside'
import Map from './features/Map'
import Wordcloud from './features/Wordcloud'
import Pie from './features/Pie'
import './cake.css'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Aside {...this.props} logoImage={'https://chriswrightdesign.com/img/logo_cw.svg'} />
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route display="地图" path="map" component={Map} />
      <Route display="词云" path="wordcloud" component={Wordcloud} />
    </Route>
  </Router>
), document.getElementById('root'))
