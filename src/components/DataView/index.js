import React from 'react'
import Handsontable from 'handsontable/dist/handsontable.full.js'
import Button from '../Button'
import './index.css'

export default class DataView extends React.Component {

  componentDidMount() {
    this.hot = new Handsontable(this.tableContainer, this.props.config)
  }

  handleClick = () => {
    this.props.onClick(this.hot.getData())
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
