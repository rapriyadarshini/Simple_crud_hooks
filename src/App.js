import React, { useState } from 'react';
import './App.css';
import DisplayEvents from './components/DisplayEvents';
import EventsList from './components/EventsList';

import Register from './components/Register';
import RegisteredList from './components/RegisteredList';


const App= () => {

  const EventList = [
    { id: 1, EventName: "Hackathon", Duration: "90 min" },
    { id: 2, EventName: "Chess", Duration: "30 min" },
    { id: 3, EventName: "Puzzle", Duration: "45 min" },
    
  ];

  const initialEventState = { id: null, EventName: '', Duration: '', }

  const [events, setEvents] = useState(EventList);
  const [editing, setEditing] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(initialEventState);

  const RegisteredData = [
    { id: 1, Name: 'Pillu', Email: 'pillu@gmail.com', Mobile: '1234' },
    { id: 2, Name: 'Darshini', Email: 'darshini@gmail.com', Mobile: '2345'},
    { id: 3, Name: 'Priya', Email: 'priya@gmail.com', Mobile: '3456' },
  ]

  const [register, setRegister] = useState(RegisteredData);

  // Add users to registered list ...
  const registerAdd = props => {
    props.id = register.length + 1
    setRegister([...register, props])
  }
  // delete or un register ...
  const unregisterRemove = id => {
    setRegister(register.filter(registerlist => registerlist.id !== id))
  }

  const editEvents = events => {
    setEditing(true)
    setCurrentEvent({ 
      id: events.id, 
      EventName: events.EventName,  
      Duration : events.Duration 
    })
  }

  const updateEventDetails = (id, updatedEvent) => {
    setEditing(false)
    console.log(id,'iddddd')
    setEvents(events.map(item => (item.id === id ? updatedEvent : item)))
  }


  return (
    <div className="container">
      <h2 className="text-center">Hooks Problem Statement </h2>
      <div className="row">
      <h3 className="text-center">Events details</h3>
      {editing ? (
        <div>
          {/* <h2 className="text-center">Edit Document</h2> */}
          <div className="col-md-8 col-md-offset-2">
          <DisplayEvents
            editing={editing}
            setEditing={setEditing}
            currentEvent={currentEvent}
            updateEventDetails={updateEventDetails}
          />
          </div>
        </div>
      ) : (
        <div>

        </div>
      )}
      <div className="col-md-6 col-md-offset-3">
        <EventsList events={events} editEvents={editEvents} />
      </div>
      </div>
      <div className="row">
        <div>
        <h3 className="text-center">Registration Section</h3>
        <div className="col-md-8 col-md-offset-2">
          <Register register={registerAdd} />
        </div>
        </div>
      </div>
      <div className="row">
        <h3 className="text-center">Registered Users </h3>
        <div className="col-md-6 col-md-offset-3">
          <RegisteredList registerlist ={register} unregister={unregisterRemove}/>
        </div>
      </div>
    </div>
  );
}

export default App;
