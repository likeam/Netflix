import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const loginHandler = () => (
    setIsLogin(!isLogin)
   )

   const getInputData = (e) => {
    e.preentDefault();
    console.log(fullName, email, password);
   }
   
  return (
    <div>
        <Header />
        <div className='absolute'>
          <img 
            src="https://www.slashgear.com/img/gallery/netflix-4k-streaming-on-macos-big-sur-to-require-a-t2-security-chip/intro-import.webp" alt="netflix" 
            className='w-[100vw] h-[100vh]'
            />
        </div>
        <form onSubmit={getInputData} className='absolute left-0 right-0 flex flex-col items-center justify-center w-3/12 p-12 mx-auto bg-black rounded-md my-36 opacity-85 '>
          <div className='flex flex-col text-center'>
            <h1 className="mb-4 text-3xl font-bold text-white">{isLogin? "Login" : "SignUp"}</h1>
            { 
              !isLogin && <input value={fullName} onChange={(e) => setFullName(e.target.value)} id='fullName' name='fullName' type="text" placeholder='Name'  className='p-3 my-2 text-white bg-gray-800 rounded-sm outline-none '/>
              }
            
            <input value={email} onChange={(e) => setEmail(e.target.value)} id='email' name='email' type="email" placeholder='Email'  className='p-3 my-2 text-white bg-gray-800 rounded-sm outline-none ' />
            <input value={password} onChange={(e) => setPassword(e.target.value)} id='password' name='password' type="text" placeholder='Password'  className='p-3 my-2 text-white bg-gray-800 rounded-sm outline-none '  />
            <button type='submit'  className='p-3 mt-6 font-bold text-white bg-red-600 rounded-sm'>{isLogin? "Login" : "Signup"}</button>
            <p  className='mt-2 text-white '>{isLogin? "New to Netflix?" : "Allready have an account"} <span onClick={loginHandler} className='ml-2 font-medium text-blue-800 cursor-pointer '>{isLogin?"Signup" :"Login"}</span></p>
          </div>
        </form>
    </div>
  )
}

export default Login