import React, { useState } from 'react'

const Login = () => {
  const [state,setState]=useState('Sign Up')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [name,setname]=useState('')

  const submithandlers=async(e)=>{
    e.preventDefault()
    console.log(email,name,password)
  }
  return (
      <form className=' min-h-[80vh] flex items-center' onSubmit={submithandlers}>
        <div className=' flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-lg text-zinc-600  text-sm shadow-lg'>
          <p className=' text-2xl font-semibold'>{state=== 'Sign Up'? 'Create Account':'Login'}</p>
          <p>Please {state=== 'Sign Up'? 'Sign Up':'Log in'} to Book appointment</p>
          {state=== 'Sign Up' && <div className=' w-full'>
            <p>Full Name</p>
            <input className=' border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=> setname(e.target.name)} value={name} required/>
          </div> }
          
          <div className=' w-full'>
            <p>Email</p>
            <input className=' border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e)=> setemail(e.target.name)} value={email} required/>
          </div>
          <div className=' w-full'>
            <p>Password</p>
            <input className=' border border-zinc-300 rounded w-full p-2 mt-1' type='password' onChange={(e)=> setpassword(e.target.name)} value={password} required />
          </div>
          <button className=' bg-primary text-white w-full py-2 rounded-md text-base' type="submit">{state === 'Sign UP'? "Create Account":"Login"}</button>
          {
            state === 'Sign Up'?
             <p>Already have account? <span onClick={()=>setState('Login')} className=' text-primary cursor-pointer underline'>Login here</span></p>
             : <p>Create a new Account? <span onClick={()=>setState('Sign Up')} className=' text-primary cursor-pointer underline'>Click here</span></p>
          }
        </div>
      </form>
  )
}

export default Login