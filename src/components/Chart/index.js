import React from 'react'
import echarts from 'echarts'

export default class Chart extends React.Component {
  componentWillMount() {

  }
  render() {
    return <div ref={(c) => {this.chart = c}}></div>
  }
}
