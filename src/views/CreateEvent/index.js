import React from 'react'
import {Container} from 'components'
import CreateEventForm from './CreateEventForm'
import categories from '../../data/categories'
import employees from '../../data/employes'

const handleSubmit = (data) => {
  const res = {...data}

  const coordinatorData = employees.find(({id}) => id === res.coordinator)
  res.coordinator = {
    id: coordinatorData.id.toString(),
    email: coordinatorData.email
  }

  if (res.event_fee) {
    res.event_fee = Number(res.event_fee)
  }

  if (res.reward) {
    res.reward = Number(res.reward)
  }

  if (!res.paid_event) {
    delete res.event_fee
  }

  if (res.email) {
    delete res.email
  }

  if (res.category_id === -1) {
    delete res.category_id
  }

  // I can use moment.js but for such trivial case i think it's enough
  if (res.timeFormat === 'AM') {
    res.date = `${res.date}T${res.time}`
  } else {
    let [hour, minutes] = res.time.split(':')
    if (hour === 12) {
      hour = '00'
    } else {
      hour = Number(hour) + 12
    }

    res.date = `${res.date}T${hour}:${minutes}`
  }
  delete res.time
  delete res.timeFormat

  if (res.duration) {
    res.duration = Number(res.duration) * 3600
  }

  console.log(res)
}

const CreateEvent = () => {
  return (
    <Container>
      <CreateEventForm employees={employees} categories={categories} onSubmit={handleSubmit} />
    </Container>
  )
}

export default CreateEvent
