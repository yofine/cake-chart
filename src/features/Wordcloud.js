import React from 'react'
import DataView from '../components/DataView'
import ChartView from '../components/ChartView'
import ConfigurarView from '../components/ConfigurarView'

const color = () => {
  return 'rgb(' + [Math.round(Math.random() * 160), Math.round(Math.random() * 160), Math.round(Math.random() * 160)].join(',') + ')';
}

const defaultChartOption = {
  series: [{
    type: 'wordCloud',
    gridSize: 20,
    sizeRange: [12, 50],
    rotationRange: [0, 0],
    rotationStep: 20,
    shape: 'circle',
    width: '100%',
    height: '100%',
    textStyle: {
      normal: { color },
      emphasis: { shadowBlur: 10, shadowColor: '#333' }
    },
    data: []
  }]
}

export default class WordCloud extends React.Component {

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
    colHeaders: ['热词', '词频'],
    columns: [{ data: 'word', }, { data: 'count', }]
  }

  configs = [{
    key: 'shape',
    name: '形状',
    type: 'select',
    defaultvalue: 'circle',
    values: [{
      value: 'circle',
      name: '圆形',
    }, {
      value: 'diamond',
      name: '钻石',
    }]
  }, {
    key: 'rotationRange',
    name: '旋转范围',
    type: 'number-range',
    defaultvalue: [0, 0],

  }]

  handleDataChange = value => {
    const seriesData = []
    value.forEach(e => {
      if(e[0] && e[1]) {
        seriesData.push({name: e[0], value: e[1]})
      }
    })
    defaultChartOption.series[0].data = seriesData
    this.setState({
      chartOption: defaultChartOption
    })
  }

  handleConfigChange = value => {

  }

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
