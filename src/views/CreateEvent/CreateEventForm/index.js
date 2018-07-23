/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import About from './About'
import Coordinator from './Coordinator'
import Date from './Date'
import Button from './Button'
import {validate} from '../validators'
import {reduxForm} from 'redux-form'

class CreateEventForm extends Component {
  render () {
    const {employees, categories, handleSubmit} = this.props
    console.log(this.props)

    return (
      <form>
        <About categories={categories} />
        <Coordinator employees={employees} />
        <Date />

        <Button onClick={handleSubmit}>Publish event</Button>
      </form>
    )
  }
}

export default reduxForm({form: 'createEventForm', validate})(CreateEventForm)
