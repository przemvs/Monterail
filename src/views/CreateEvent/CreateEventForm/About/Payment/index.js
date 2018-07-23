/* eslint-disable react/prop-types */
import React, {Component} from 'react'
import {Field} from 'redux-form'
import {Input} from 'components'
import {PaymentItem, PaymentStyle} from './PaymentStyle'
import Fee from './Fee'

class Payment extends Component {
  state = {
    optionChecked: 'free'
  }

  componentDidMount () {
    this.handleChange(this.props.defaultValue)
  }

  handleChange = paymentType => {
    console.log(this.props)
    this.setState({
      optionChecked: paymentType
    })
    this.props.input.onChange(paymentType)
  }

  render () {
    const {name} = this.props

    return (
      <PaymentStyle>
        <PaymentItem onClick={() => this.handleChange('free')} active={this.state.optionChecked === 'free'}>
          <input
            type='radio'
            name={name}
            value='free'
            checked={this.state.optionChecked === 'free'}
          />
          <label htmlFor='free'>Free event</label>
        </PaymentItem>

        <PaymentItem onClick={() => this.handleChange('paid')} active={this.state.optionChecked === 'paid'}>
          <input
            type='radio'
            name={name}
            value='paid'
            checked={this.state.optionChecked === 'paid'}
          />
          <label htmlFor='paid'>Paid event</label>
        </PaymentItem>

        {this.state.optionChecked === 'paid' && (
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
    )
  }
}

export default Payment
