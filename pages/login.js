import {useState} from 'react'
import Axios from '../lib/axios'

export default function login() {
    const {http,saveToken} = Axios();

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
  
    const submitForm = event =>{
      event.preventDefault()
  
      http.post('/login',{email:email, password:password}).then((res)=>{
        // setToken(res.data.user, res.data.access_token)
        saveToken(res.data.user, res.data.access_token);
        // console.log(res.data);
      })
  
      // console.log(email+" "+password)
    }



  return (
    <div className='row'>
    <div className="col-md-6 offset-md-3">

      <form onSubmit={submitForm}>

        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={e=>setEmail(e.target.value)} />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating mb-3">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        <label htmlFor="floatingPassword">Password</label>
      </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
   
      </form>
    </div>
  </div>
  )
}
