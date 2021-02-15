import React from 'react';

const EventsList = props =>(
  
  <div className="table-responsive">
  <table className="table">
    <thead>
      <tr>
        <th>Event</th>
        <th>Duration</th>
        <th>Actions's allowed</th>
      </tr>
    </thead>
    <tbody>
    {props.events.length > 0 ? (
        props.events.map(item => (
          <tr key={item.id}>
            <td>{item.EventName}</td>
            <td>{item.Duration}</td>
            <td>
              <button onClick={() => { props.editEvents(item) }} >Edit</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td >No Events available to edit </td>
        </tr>
      )}
      
    </tbody>
  </table>
  </div>
)

export default EventsList