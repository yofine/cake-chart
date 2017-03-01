import React from 'react'
import Handsontable from 'handsontable/dist/handsontable.full.js'

export default class HotTable extends React.Component {

  componentDidMount() {
    this.hot = new Handsontable(this.tableContainer, this.props.options)
  }

  render() {
    return <div ref={(t) => {this.tableContainer = t}}></div>
  }
}

