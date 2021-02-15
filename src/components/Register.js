import React, { useRef, useState } from 'react'



const Register = props => {

  const name = useRef();
  const email = useRef();
  const mobile = useRef();
  
  // const initialState = { id: null, Name: '', Email: '', Mobile: '' }
  // const [register, setRegister] = useState(initialState)

  const submit = (event) => {
    event.preventDefault() //new thing need to keep
    const nameValue = name.current.value;
    const emailValue = email.current.value;
    const mobileValue = mobile.current.value;

    props.register({Name: nameValue, Email: emailValue, Mobile: mobileValue});

    name.current.value = "";
    email.current.value = "";
    mobile.current.value = "";
  };

  // const handleInputChange = event => {
	// 	const { name, value } = event.target

	// 	setRegister({ ...register, [name]: value })
  // }
  
  return (
  //   <form onSubmit={event => {
  //     // event.preventDefault()
  //     if (!register.Name  || !register.Email || !register.Mobile) return

  //     props.register(register)
  //     setRegister(initialState)
  //   }}>
  //     <input type="text" name="Name" placeholder="Enter Name" value={register.Name} onChange={handleInputChange} />
  //     <input type="text" name="Email" placeholder="Enter Mail id" value={register.Email} onChange={handleInputChange} />
  //     <input type="text" name="Mobile" placeholder="Enter Mobile number" value={register.Mobile} onChange={handleInputChange}/>  
  //     <button> Register </button>
  //   </form>

    <form onSubmit= {submit} >
      <input ref={name} type="text" placeholder="Enter name.." />
      <input ref={email} type="text" placeholder="Enter email id.." />
      <input ref={mobile} type="text" placeholder="Enter mobile number.." />
      <button> Register </button>
    </form>
   )
  
}

export default Register