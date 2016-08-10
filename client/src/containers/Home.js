import React, { Component, PropTypes } from 'react'
import { Row, Col, Button } from 'antd'

export default class Dashboard extends Component {

  constructor(props, context) {
    super(props, context)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      height: document.documentElement.clientHeight - 50,
    }
    this.option = {
      series: [{
        type: 'wordCloud',
        gridSize: 2,
        sizeRange: [12, 50],
        rotationRange: [-90, 90],
        shape: 'pentagon',
        width: 600,
        height: 400,
        textStyle: {
          normal: {
            color: function color() {
              return 'rgb(' + [Math.round(Math.random() * 160), Math.round(Math.random() * 160), Math.round(Math.random() * 160)].join(',') + ')';
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        data: []
      }]
    };
  }

  handleClick() {
    const foo = this.textarea.value.split('\n')
    let bar = []
    _.each(foo, e => {
      const temp = e.split(' ')
      bar.push({name: temp[1], value: temp[0]})
    })
    let option = _.cloneDeep(this.option)
    option.series[0].data = bar
    option.series[0].maskImage
    this.myChart.setOption(option);
  }

  componentDidMount() {
    window.onresize = () => {
      this.setState({
        height: document.documentElement.clientHeight - 50,
      })
    }
    this.myChart = echarts.init(this.chart)
  }

  render() {
    return (
      <Row>
        <Col span={6}>
          <div id="wmd-view" style={{height: this.state.height - 100}}>
            <textarea
              id="wmd-editor"
              ref={(c) => this.textarea = c}
            >
            </textarea>
          </div>
          <div id="go">
            <Button type="primary" onClick={this.handleClick}>GO </Button>
          </div>
        </Col>
        <Col span={18}>
          <div id="pre-view" style={{height: this.state.height}}>
            <div style={{height: 500, width: '100%'}} ref={(c) => this.chart = c}> </div>
          </div>
        </Col>
      </Row>
    )
  }
}
