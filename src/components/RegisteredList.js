import React from 'react';

const RegisteredList = props =>(
  
  <div className="table-responsive">
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Mail</th>
        <th>Mobile</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    {props.registerlist.length > 0 ? (
        props.registerlist.map(item => (
          <tr key={item.id}>
            <td>{item.Name}</td>
            <td>{item.Email}</td>
            <td>{item.Mobile}</td>
            <td>
              <button onClick={() => props.unregister(item.id)} > Unregister </button>

            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td >No one has registered yet.. </td>
        </tr>
      )}
      <h5> Totally {props.registerlist.length} users registered till now... </h5> 
    </tbody>
  </table>
  </div>
)

export default RegisteredList