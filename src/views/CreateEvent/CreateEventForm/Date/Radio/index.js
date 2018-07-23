/* eslint-disable */
import React, { Component } from 'react'
import { TimeFormat, TimeFormatItem } from './TimeFormat'

class Radio extends Component {
  state = {
    optionChecked: 'AM'
  }

  componentDidMount(){
    this.handleChange(this.props.defaultValue)
  }

  handleChange = timeFormat => {
    this.setState({
      optionChecked: timeFormat
    })
    this.props.input.onChange(timeFormat)
  }

  render () {
    const {name} = this.props
    return (
      <TimeFormat>
        <TimeFormatItem onClick={() => this.handleChange('AM')} active={this.state.optionChecked === 'AM'}>
          <input
            type="radio"
            name={name}
            value="AM"
            checked={this.state.optionChecked === 'AM'}
          />
          <label htmlFor="AM">AM</label>
        </TimeFormatItem>

        <TimeFormatItem onClick={() => this.handleChange('PM')} active={this.state.optionChecked === 'PM'}>
          <input
            type="radio"
            name={name}
            value="PM"
            checked={this.state.optionChecked === 'PM'}
          />
          <label htmlFor="PM">PM</label>
        </TimeFormatItem>
      </TimeFormat>
    )
  }
}

export default Radio
