import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import TextAreaInformations from './TextAreaInformations'
import { Error } from 'components'

const invalidInput = {borderColor: 'red'}

const TextArea = ({input, type, label, characters, meta: {touched, error, warning}, ...custom}) => {
  return (
    <Fragment>
      <div>
        <textarea
          rows={6}
          style={touched && error ? invalidInput : {}}
          placeholder={label}
          {...input}
          {...custom}
        />
        <TextAreaInformations>
          <div>Max length 140 characters</div>
          <div>{characters}/140</div>
        </TextAreaInformations>
      </div>
      {touched && error && <Error error={error} touched={touched} />}
    </Fragment>
  )
}

TextArea.propTypes = {
  input: PropTypes.object,
  type: PropTypes.string,
  label: PropTypes.string,
  meta: PropTypes.object,
  characters: PropTypes.number
}

export default TextArea
