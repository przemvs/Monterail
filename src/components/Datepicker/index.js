import React from 'react'
import PropTypes from 'prop-types'

const invalidInput = {borderColor: 'red'}
const invalidLabel = {color: 'red', fontSize: '0.6rem', textAlign: 'left'}

const Datepicker = ({input, type, label, min, max, meta: {touched, error, warning}, ...custom}) => {
  return (
    <React.Fragment>
      <input
        type={type}
        style={touched && error ? invalidInput : {}}
        placeholder={label}
        min={min}
        max={max}
        {...input}
        {...custom}
      />
      {touched && error && <p style={touched && error ? invalidLabel : {}}>{error}</p>}
    </React.Fragment>
  )
}

Datepicker.propTypes = {
  input: PropTypes.object,
  type: PropTypes.string,
  label: PropTypes.string,
  meta: PropTypes.object,
  min: PropTypes.string,
  max: PropTypes.string
}

export default Datepicker
