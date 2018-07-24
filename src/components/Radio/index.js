/* eslint-disable react/prop-types */
import React, { Component } from 'react'

class Radio extends Component {
  componentDidMount () {
    const {input, defaultValue} = this.props
    input.onChange(!!defaultValue)
  }

  handleChange = () => {
    this.props.input.onChange(!this.props.input.value)
  }

  render () {
    const {input, label, checked} = this.props

    return (
      <div>
        <div onClick={this.handleChange}>
          <input
            type='radio'
            name={input.name}
            checked={checked}
          />
          <label htmlFor={input.name}>{label}</label>
        </div>
      </div>
    )
  }
}

export default Radio
