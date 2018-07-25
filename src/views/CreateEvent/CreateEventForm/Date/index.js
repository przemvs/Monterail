import React from 'react'
import PropTypes from 'prop-types'
import {Field, getFormMeta, getFormSyncErrors} from 'redux-form'
import {Input, Error} from 'components'
import Radio from './Radio'
import {FormGroup, Title} from '../FormGroup'
import {InputGroup, Label, Value, ValueGroup} from 'components/InputGroup'
import {connect} from 'react-redux'

const Date = ({errors, meta}) => {
  return (
    <FormGroup>
      <Title>When</Title>
      <InputGroup>
        <Label>Starts on <span>*</span></Label>
        <Value>
          <ValueGroup>
            <Field
              component={Input}
              type='date'
              name='date'
            /> at
            <Field
              component={Input}
              type='time'
              name='time'
              min='00:00'
              max='11:59'
            />
            <Field component={Radio} name='timeFormat' defaultValue='AM' />
          </ValueGroup>
          {((meta.date && meta.date.touched) || (meta.time && meta.time.touched)) && errors && errors.dateTime && <Error error={errors.dateTime} />}
        </Value>
      </InputGroup>
      <InputGroup>
        <Label>Duration</Label>
        <Value>
          <ValueGroup>
            <Field
              name='duration'
              type='text'
              component={Input}
              placeholder='Number'
            /> hour
          </ValueGroup>
        </Value>
      </InputGroup>
    </FormGroup>
  )
}

Date.propTypes = {
  errors: PropTypes.object,
  meta: PropTypes.object
}

export default connect(state => ({
  errors: getFormSyncErrors('createEventForm')(state),
  meta: getFormMeta('createEventForm')(state)
}))(Date)
