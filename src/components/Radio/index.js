import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

Radio.propTypes = {
  defaultValue: PropTypes.bool,
  checked: PropTypes.bool,
  label: PropTypes.string,
  input: PropTypes.object
}

export default Radio
