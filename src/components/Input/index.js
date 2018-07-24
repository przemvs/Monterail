import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { Error } from 'components'

const invalidInput = {borderColor: 'red'}

const Input = ({input, type, label, meta: {touched, error, warning}, ...custom}) => {
  return (
    <Fragment>
      <div>
        <input
          type={type}
          style={touched && error ? invalidInput : {}}
          placeholder={label}
          {...input}
          {...custom}
        />
      </div>
      {touched && error && <Error error={error} touched={touched} />}
    </Fragment>
  )
}

Input.propTypes = {
  input: PropTypes.object,
  type: PropTypes.string,
  label: PropTypes.string,
  meta: PropTypes.object
}

export default Input
