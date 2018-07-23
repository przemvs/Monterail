import React from 'react'
import {Content} from './Content'
import PropTypes from 'prop-types'

const Error = ({error, touched}) => {
  return (
    <Content touched={touched}>
      <span>{error}</span>
    </Content>
  )
}

Error.propTypes = {
  error: PropTypes.string,
  touched: PropTypes.bool
}

export default Error
