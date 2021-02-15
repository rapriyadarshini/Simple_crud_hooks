import React, { useState, useEffect } from 'react'

const DisplayEvents = props => {

  const [events, setEvents] = useState(props.currentEvent)
  useEffect(
    () => {
      setEvents(props.currentEvent)
    },
    [ props ]
  )

  const handleInputChange = event => {
		const { name, value } = event.target

		setEvents({ ...events, [name]: value })
  }
  
  return (
    <form onSubmit={event => {
      event.preventDefault()
      if (!events.EventName || !events.Duration) 
       return

      props.updateEventDetails(events.id, events)
    }}>
      <input type="text" name="EventName" value={events.EventName} onChange={handleInputChange} />
      <input type="text" name="Duration" value={events.Duration} onChange={handleInputChange} />
      <button > Save Changes </button>
      <button onClick={() => props.setEditing(false)} >
        Cancel
      </button>
    </form>
  )
}

export default DisplayEvents