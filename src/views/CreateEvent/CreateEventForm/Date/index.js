/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import {Field, getFormMeta, getFormSyncErrors} from 'redux-form'
import {Input} from 'components'
import Radio from './Radio'
import {FormGroup, Title} from '../FormGroup'
import {InputGroup, Label, Value, ValueGroup} from 'components/InputGroup'
import {connect} from 'react-redux'
import Error from '../../../../components/Error'

class Date extends Component {
  render () {
    const {errors, meta} = this.props

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
              {((meta.date && meta.date.touched) || (meta.time && meta.time.touched)) && errors && errors.dateTime && <Error error={errors.dateTime} />}
            </ValueGroup>
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
}

export default connect(state => ({
  errors: getFormSyncErrors('createEventForm')(state),
  meta: getFormMeta('createEventForm')(state)
}))(Date)
