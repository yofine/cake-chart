import React from 'react'
import Handsontable from 'handsontable/dist/handsontable.full.js'
import Button from '../Button'

export default class Data extends React.Component {

  componentDidMount() {
    const data = [
      ["", "Ford", "Volvo", "Toyota", "Honda"],
      ["2016", 10, 11, 12, 13],
      ["2017", 20, 11, 14, 13],
      ["2018", 30, 15, 12, 13]
    ];
    this.hot = new Handsontable(this.tableContainer, {
		  data,
      height: 500,
      colWidths: 47,
      rowHeights: 23,
      rowHeaders: true,
      colHeaders: true
    })
  }

  handleClick = () => {

    window.hot = this.hot
    console.log(this.hot.getData())
    debugger
  }
  render() {
    return (
      <div className="data-view">
        <div className="hot-table">
        <div ref={(t) => {this.tableContainer = t}}></div>
        </div>
        <div className="action-container">
          <Button onClick={this.handleClick} type={'primary'}>Run</Button>
        </div>
      </div>
    )
  }
}
