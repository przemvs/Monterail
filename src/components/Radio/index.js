/* eslint-disable */
import React, { Component } from 'react'

class Radio extends Component {
  componentDidMount(){
    this.handleChange(this.props.defaultValue)
  }

  handleChange = type => {
    console.log(this.props.input)
    this.props.input.onChange(type)
  }

  render () {
    const {name, array} = this.props
    return (
      <div>
        {array.map((radio, index) => {
            return (
              <div key={index} onClick={() => this.handleChange(radio.value)}>
                <input
                  type="radio"
                  name={name}
                  value={radio.value}
                  checked={radio.value === radio.selected}
                />
                <label htmlFor={radio.valie}>{radio.value}</label>
              </div>
            )
          }
        )}
      </div>
    )
  }
}

export default Radio
