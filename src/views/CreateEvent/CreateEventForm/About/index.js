/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { Field } from 'redux-form'
import { Input, TextArea } from 'components'
import { FormGroup, Title } from '../FormGroup'
import { InputGroup, Label, Value, ValueGroup } from 'components/InputGroup'
import Payment from './Payment'

class About extends Component {
  state = {
    descriptionLength: 0
  }

  countCharacters = e => {
    const length = e.target.value.length
    this.setState({descriptionLength: length})
  }

  render () {
    const {categories} = this.props

    return (
      <FormGroup>
        <Title>About</Title>
        <InputGroup>
          <Label>Title <span>*</span></Label>
          <Value>
            <Field
              name='title'
              type='text'
              component={Input}
              placeholder='Make it short and clear'
            />
          </Value>
        </InputGroup>
        <InputGroup onStart>
          <Label>Description <span>*</span></Label>
          <Value>
            <Field
              name='description'
              component={TextArea}
              placeholder='Write about your event, be creative'
              onChange={this.countCharacters}
              characters={this.state.descriptionLength}
            />
          </Value>
        </InputGroup>
        <InputGroup>
          <Label>Category</Label>
          <Value>
            <select name='category'>
              <option disabled selected>Select category</option>
              {categories.map((category, index) => <option key={index} value={category.id}>{category.name}</option>)}
            </select>
          </Value>
        </InputGroup>
        <InputGroup>
          <Label>Payment</Label>
          <Value>
            <Field component={Payment} name='paid_event' defaultValue='free' />
          </Value>
        </InputGroup>
        <InputGroup>
          <Label>Reward</Label>
          <Value>
            <ValueGroup>
              <Field
                component={Input}
                name='reward'
                type='text'
                placeholder='Number'
              /> reward points for attendance
            </ValueGroup>
          </Value>
        </InputGroup>
      </FormGroup>
    )
  }
}

export default About
