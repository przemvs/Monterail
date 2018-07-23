export const validate = values => {
  const errors = {}

  if (!values.title) {
    errors.title = 'Title cannot be empty'
  }

  if (!values.description) {
    errors.description = 'Description cannot be empty'
  }

  if (values.description && values.description.length > 140) {
    errors.description = 'You reached characters limit'
  }

  if (!values.date || !values.time) {
    errors.time = 'You must select date and time'
  }

  if (!values.coordinator) {
    errors.coordinator = 'You must select coordinator'
  }

  return errors
}
