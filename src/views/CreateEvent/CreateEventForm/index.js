/* eslint-disable react/prop-types */
import React, {Component, Fragment} from 'react'
import About from './About'
import Coordinator from './Coordinator'
import Date from './Date'
import Button from './Button'
import {validate} from '../validators'
import {reduxForm} from 'redux-form'
import EventAdded from './EventAdded'

class CreateEventForm extends Component {
  render () {
    const {employees, categories, handleSubmit, submitSucceeded} = this.props

    return (
      <Fragment>
        {submitSucceeded ? <EventAdded /> : (
          <form>
            <About categories={categories} />
            <Coordinator employees={employees} />
            <Date />

            <Button onClick={handleSubmit}>Publish event</Button>
          </form>
        )}
      </Fragment>
    )
  }
}

export default reduxForm({form: 'createEventForm', validate})(CreateEventForm)
