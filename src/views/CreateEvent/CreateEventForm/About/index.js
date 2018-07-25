import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Field, getFormValues} from 'redux-form'
import { Input, TextArea, Radio, Select } from 'components'
import { FormGroup, Title } from '../FormGroup'
import { InputGroup, Label, Value, ValueGroup } from 'components/InputGroup'
import {PaymentItem, PaymentStyle} from './PaymentStyle'
import Fee from './Fee'
import {connect} from 'react-redux'

class About extends Component {
  state = {
    descriptionLength: 0,
    isPaid: false,
    isChecked: true
  }

  countCharacters = e => {
    const length = e.target.value.length
    this.setState({descriptionLength: length})
  }

  changeEventType = () => {
    this.setState((prevState) => {
      return {isChecked: !prevState.isChecked}
    })
  }

  render () {
    const {categories, values} = this.props

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
            <Field
              name='category_id'
              label='Select category'
              component={Select}
              options={categories}
              defaultValue={-1}
            />
          </Value>
        </InputGroup>
        <InputGroup>
          <Label>Payment</Label>
          <Value>
            <PaymentStyle>
              <PaymentItem>
                <Field
                  onChange={() => this.changeEventType}
                  name='paid_event'
                  component={Radio}
                  defaultValue
                  checked={values && values.paid_event === false}
                  label='Free event'
                />
              </PaymentItem>

              <PaymentItem>
                <Field
                  onChange={() => this.changeEventType}
                  name='paid_event'
                  component={Radio}
                  checked={values && values.paid_event === true}
                  label='Paid event'
                />
              </PaymentItem>

              {values && values.paid_event && (
                <Fee>
                  <Field
                    component={Input}
                    name='event_fee'
                    type='number'
                    placeholder='Fee'
                  /> <span>$</span>
                </Fee>
              )}
            </PaymentStyle>
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

About.propTypes = {
  values: PropTypes.object,
  categories: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default connect(state => ({
  values: getFormValues('createEventForm')(state)
}))(About)
