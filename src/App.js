import React, {Fragment} from 'react'
import {Header} from 'components'
import CreateEvent from 'views/CreateEvent'
import './scss/styles.scss'

const App = () => {
  return (
    <Fragment>
      <Header />
      <CreateEvent />
    </Fragment>
  )
}

export default App
