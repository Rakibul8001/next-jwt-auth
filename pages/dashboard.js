import {useState, useEffect} from 'react'
import Axios from '../lib/axios'

export default function dashboard() {

  const {user,http,token} = Axios();



  const [userDetail, setUserDetail] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    userDetails();
  },[])

  async function userDetails(){
    setLoading(true)
   await http.post('/me').then((res)=>{
      setUserDetail(res.data);
    }).catch(e=>{
      console.log('something went wrong!')
    })
    setLoading(false)
  }

  let contentElement;

  if(!loading){
    contentElement=(
      <>
      <ul>
        <li>
          Name: {userDetail?.name}
        </li>
        <li>
          E-mail: {userDetail?.email}
        </li>
      </ul>
    </>
    )
  }
  else{
    contentElement=(
      <p>Loading....</p>
    )
  }

  return (
    <div>
      {
       contentElement
      }
    </div>
  )
}
