/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import {Container} from 'components'
import CreateEventForm from './CreateEventForm'
import categories from '../../data/categories'
import employees from '../../data/employes'

class CreateEvent extends Component {
  handleSubmit = (data) => {
    console.log(data)
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
