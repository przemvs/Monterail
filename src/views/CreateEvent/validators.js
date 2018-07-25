import {isBefore, isEmail} from 'validator'

export const validate = values => {
  const errors = {}

  const date = new Date()
  const currentDate = date.toISOString().split('T')[0]

  if (!values.title) {
    errors.title = 'Title cannot be empty'
  }

  if (!values.description) {
    errors.description = 'Description cannot be empty'
  }

  if (values.description && values.description.length > 140) {
    errors.description = 'You reached max characters limit'
  }

  if (values.date && isBefore(values.date, currentDate)) {
    errors.dateTime = 'Event data cannot be before current data'
  }

  if (!values.date || !values.time) {
    errors.dateTime = 'You must select date and time'
  }

  if (!values.coordinator) {
    errors.coordinator = 'You must select coordinator'
  }

  if (values.email && !isEmail(values.email + '')) {
    errors.email = 'Incorrect email'
  }

  return errors
}
