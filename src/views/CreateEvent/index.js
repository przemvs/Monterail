/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import {Container} from 'components'
import CreateEventForm from './CreateEventForm'
import categories from '../../data/categories'
import employees from '../../data/employes'

class CreateEvent extends Component {
  handleSubmit = (data) => {
    const res = {...data}

    if (res.event_fee) {
      res.event_fee = Number(res.event_fee)
    }

    if (!res.paid_event) {
      delete res.event_fee
    }

    // I can use moment.js but for such trivial case i think it's enough
    if (res.timeFormat === 'AM') {
      res.date = `${res.date}T${res.time}`
    } else {
      let [hour, minutes] = res.time.split(':')
      if (hour === 12) {
        hour = '00'
      } else {
        hour = Number(hour) + 12
      }

      res.date = `${res.date}T${hour}:${minutes}`
    }
    delete res.time
    delete res.timeFormat

    if (res.duration) {
      res.duration = Number(res.duration) * 3600
    }

    console.log(res)
  }

  render () {
    return (
      <Container>
        <CreateEventForm employees={employees} categories={categories} onSubmit={this.handleSubmit} />
      </Container>
    )
  }
}

export default CreateEvent
