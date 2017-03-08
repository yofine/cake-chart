import React from 'react'
import _ from 'lodash'
import DataView from '../components/DataView'
import ChartView from '../components/ChartView'
import ConfigurarView from '../components/ConfigurarView'

const defaultChartOption = {
  tooltip: {
    trigger: 'item'
  },
  visualMap: {
    min: 0,
    max: 2500,
    left: 'left',
    top: 'bottom',
    text: ['高','低'],
    calculable: true
  },
  series: [{
    type: 'pie',
    data: []
  }]
}

export default class Pie extends React.Component {
  state = {
    chartOption: defaultChartOption
  }

  tableConfig = {
    data: [],
    colWidths: 100,
    rowHeights: 30,
    minSpareRows: 1,
    startRows: 5,
    startCols: 5,
    rowHeaders: true,
    colHeaders: true,
    colHeaders: ['省市', '数量'],
    columns: [{ data: 'region', }, { data: 'count', }]
  }

  handleDataChange = value => {
    const seriesData = []
    let range = []
    value.forEach(e => {
      if(e[0] && e[1]) {
        seriesData.push({name: e[0], value: e[1]})
        range.push(e[1])
      }
    })
    range = _.sortBy(range, e => -e)
    defaultChartOption.series[0].data = seriesData
    defaultChartOption.visualMap.max = +range[0]
    defaultChartOption.visualMap.min = +range[range.length - 1]
    this.setState({
      chartOption: defaultChartOption
    })
  }

  handleConfigChange = value => {}

  render() {
    return (
      <div className="main-content flex">
        <DataView onClick={this.handleDataChange} config={this.tableConfig} />
        <ChartView option={this.state.chartOption} />
        <ConfigurarView onClick={this.handleConfigChange} configs={{}} />
      </div>
    )
  }
}
