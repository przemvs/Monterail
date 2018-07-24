/* eslint-disable react/prop-types */
import React, {Component} from 'react'
import {Field, getFormValues} from 'redux-form'
import {Input, Radio} from 'components'
import {PaymentItem, PaymentStyle} from '../PaymentStyle'
import Fee from '../Fee'
import {connect} from 'react-redux'

class Payment extends Component {
  render () {
    const {name} = this.props

    console.log(this.props)
    return (
      <PaymentStyle>
        <PaymentItem>
          <Field
            name={name}
            component={Radio}
            value='free'
          />
          <label htmlFor='free'>Free event</label>
        </PaymentItem>

        <PaymentItem>
          <Field
            name={name}
            component={Radio}
            value='paid'
          />
          <label htmlFor='paid'>Paid event</label>
        </PaymentItem>

        <Fee>
          <Field
            component={Input}
            name='event_fee'
            type='number'
            placeholder='Fee'
          /> <span>$</span>
        </Fee>
      </PaymentStyle>
    )
  }
}

export default connect(state => ({
  values: getFormValues('createEventForm')(state)
}))(Payment)
