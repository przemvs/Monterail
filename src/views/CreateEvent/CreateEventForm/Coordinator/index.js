/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { Field } from 'redux-form'
import { Input, Select } from 'components'
import { FormGroup, Title } from '../FormGroup'
import { InputGroup, Label, Value } from 'components/InputGroup'

class Coordinator extends Component {
  render () {
    const {employees} = this.props

    return (
      <FormGroup>
        <Title>Coordinator</Title>
        <InputGroup>
          <Label>Responsible <span>*</span></Label>
          <Value>
            <Field
              name='coordinator'
              defaultValue={7}
              label='Select coordinator'
              component={Select}
              options={employees}
            />
          </Value>
        </InputGroup>
        <InputGroup>
          <Label>Email</Label>
          <Value>
            <Field
              name='email'
              type='text'
              component={Input}
              placeholder='Make it short and clear'
            />
          </Value>
        </InputGroup>
      </FormGroup>
    )
  }
}

export default Coordinator
