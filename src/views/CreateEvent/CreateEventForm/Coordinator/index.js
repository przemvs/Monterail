/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { Field } from 'redux-form'
import { Input } from 'components'
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
            <select name='coordinator'>
              <option disabled>Me</option>
              <option selected value='99'>Me - James Jenkins</option>
              <option disabled>Others</option>
              {employees.map((employee, index) => <option key={index} value={employee.id}>{employee.name} {employee.lastname}</option>)}
            </select>
          </Value>
        </InputGroup>
        <InputGroup>
          <Label>Email</Label>
          <Value>
            <Field
              name='responsible'
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
