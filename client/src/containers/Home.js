import React, { Component, PropTypes } from 'react'

export default class Dashboard extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      height: document.documentElement.clientHeight - 50,
    }
  }

  componentDidMount() {
    window.onresize = () => {
      this.setState({
        height: document.documentElement.clientHeight - 50,
      })
    }
  }

  render() {
    const style = {
      height: this.state.height,
      overflowY: 'auto',
      width: '100%',
      background: '#ECECEC',
      padding: '30px'
    }
    return (
      <div style={style}>
        <h1>Welcome!</h1>
      </div>
    )
  }
}
