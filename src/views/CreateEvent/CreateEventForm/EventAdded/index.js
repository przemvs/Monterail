/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import {FormGroup, Title} from '../FormGroup'

class EventAdded extends Component {
  render () {
    return (
      <FormGroup success>
        <Title success>Success</Title>
        <div>Event has been created</div>
      </FormGroup>
    )
  }
}

export default EventAdded
