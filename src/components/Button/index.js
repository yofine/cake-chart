import React from 'react'
import classNames from 'classnames'
import './index.css'

export default props => {
  const buttonClass = classNames({
    button: true,
    'button-primary': props.type == 'primary',
    'button-secondary': props.type == 'secondary',
  })
  return <button
		className={buttonClass}
    onClick={props.onClick}
    >
    {props.children}
    </button>
}
