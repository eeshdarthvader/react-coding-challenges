import React, {useState} from "react";
import { SignaturePreview } from "./SignaturePreview";
import {saveUser} from '../api'

const debounceFn = (fn, threshold = 5e3) => {
  let timer;
  return function(...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, threshold) 
  }
}

// const throttle = (func, limit) => {
//   let inThrottle
//   return function() {
//     const args = arguments
//     const context = this
//     if (!inThrottle) {
//       func.apply(context, args)
//       inThrottle = true
//       setTimeout(() => inThrottle = false, limit)
//     }
//   }
// }

export const SignaturePage = () => {
  const [name, setName] = useState("name")
  const [surname, setSurName] = useState("surname")
  const [email, setEmail] = useState("email")
  const [role, setRole] = useState("role")

  const handleOnChange = async (event) => {
    const type = event.target.name
    const val = event.target.value

    if(type === 'name'){
      setName(val)
      const res = await saveUser({name: val})
      console.log(res)
    }
    if(type === 'email'){
      setEmail(val)
      await saveUser({email: val})
    }
    if(type === 'surname'){
      setSurName(val)
      await saveUser({surname: val})
    }
    if(type === 'role'){
      setRole(val)
      await saveUser({role: val})
    }
  }

  const debouncedHandleOnChange = debounceFn(handleOnChange)

  return (
    <div>
      <h1>Edit your email signature</h1>
      
      <form>
        First Name: <input type="text" name="name" onChange={debouncedHandleOnChange}/>
        <br/>
        Surname: <input type="text" name="surname" onChange={debouncedHandleOnChange}/>
        <br/>
        Role: <input type="text" name="role" onChange={debouncedHandleOnChange}/>
        <br/>
        Email: <input type="text" name="email" onChange={debouncedHandleOnChange}/>
      </form>
      <SignaturePreview
        name={name}
        surname={surname}
        email={email}
        roleName={role}
      />
    </div>
  );
};
