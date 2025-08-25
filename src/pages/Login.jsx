import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateLoginStatus } from '../globalState/login/loginSlice'


const Login = () => {
  const dispatch=useDispatch()
const navigate=useNavigate()
  const [error,setError]=useState("")
  const [data,setData]=useState({
    email:"",
    password:""
  })
  const submitHandler=(event)=>{
    
    
    event.preventDefault()
    
    
    axios.post(`${import.meta.env.VITE_API_DOMAIN}/api/user/login`,data,{withCredentials:true})
    
    
    .then(res=>{
     
      console.log(res.data);
      dispatch(updateLoginStatus(true))
      navigate("/")
      
    })
    .catch(err=>{
      
      setError(err.response.data.message);
      
    })
  }
  const changeHandler=(event)=>{
    const tempData={...data}
    tempData[event.target.name]=event.target.value
    setData(tempData)
    
    
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
  <input type="email" name="email" className="input" placeholder="Type your email" onChange={changeHandler} value={data.email} />
  
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">password</legend>
  <input type="password" name="password" className="input" placeholder="Type your password" onChange={changeHandler} value={data.password} />
  <p className="text-red-500">{error}</p>
</fieldset>
<button className="btn btn-success" type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login