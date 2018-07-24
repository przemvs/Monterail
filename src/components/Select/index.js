import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import { Error } from 'components'

const invalidSelect = {borderColor: 'red'}

class Select extends Component {
  componentDidMount () {
    const {input, defaultValue} = this.props
    if (defaultValue) {
      input.onChange(defaultValue)
    }
  }

  handleChange = val => this.props.input.onChange(Number(val.target.value))

  render () {
    const {name, options, label, touched, error, defaultValue, input} = this.props

    options.sort((a, b) => {
      if (b.id === defaultValue) {
        return 1
      }
    })

    return (
      <Fragment>
        <div>
          <select name={name} value={input.value ? input.value : defaultValue} style={touched && error ? invalidSelect : {}} onChange={this.handleChange}>
            <option disabled selected={!defaultValue}>{label}</option>
            {options.map((item, index) =>
              <option key={index} value={item.id}>{item.name}{item.lastname && ` ${item.lastname}`}</option>
            )}
          </select>
        </div>
        {touched && error && <Error error={error} touched={touched} />}
      </Fragment>
    )
  }
}

Select.propTypes = {
  options: PropTypes.object,
  name: PropTypes.string,
  label: PropTypes.string,
  touched: PropTypes.bool,
  error: PropTypes.string,
  input: PropTypes.object,
  defaultValue: PropTypes.string
}

export default Select
