import React from 'react'
import echarts from 'echarts'
import 'echarts/map/js/china.js'

export default class ChartView extends React.Component {

  componentDidMount() {
    this.myChart = echarts.init(this.chartContainer)
    this.myChart.setOption(this.props.option)
  }

  componentWillReceiveProps(nextProps) {
    console.log(JSON.stringify(nextProps.option))
    this.myChart.setOption(nextProps.option, {notMerge: true})
  }

  render() {
    return (
      <div className="chart-view">
        <div className="chart" ref={(c) => {this.chartContainer = c}}></div>
      </div>
    )
  }
}
