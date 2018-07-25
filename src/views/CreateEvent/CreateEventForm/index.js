import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
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

CreateEventForm.propTypes = {
  employees: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  categories: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  handleSubmit: PropTypes.func,
  submitSucceeded: PropTypes.bool
}

export default reduxForm({form: 'createEventForm', validate})(CreateEventForm)
