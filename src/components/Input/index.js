import React from 'react'
import PropTypes from 'prop-types'
import { Error } from 'components'

const invalidInput = {borderColor: 'red'}

const Input = ({input, type, label, meta: {touched, error, warning}, ...custom}) => {
  return (
    <React.Fragment>
      <input
        type={type}
        style={touched && error ? invalidInput : {}}
        placeholder={label}
        {...input}
        {...custom}
      />
      {touched && error && <Error error={error} touched={touched} />}
    </React.Fragment>
  )
}

Input.propTypes = {
  input: PropTypes.object,
  type: PropTypes.string,
  label: PropTypes.string,
  meta: PropTypes.object
}

export default Input
