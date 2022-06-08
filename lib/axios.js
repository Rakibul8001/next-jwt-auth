import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Axios() {
  const router = useRouter();


      //get token string
      function getToken(){

        if (typeof window !== 'undefined') {
          const tokenString = sessionStorage.getItem('token');
          const userToken = JSON.parse(tokenString)
          return userToken;
        }


    }
    //get user string
    function getUser(){
      if (typeof window !== 'undefined') {

        const userString = sessionStorage.getItem('user');
        const user_detail = JSON.parse(userString)
        return user_detail;
      }
    }

  const [user,setUser] = useState(getUser())
  const [token,setToken] = useState(getToken())

  function saveToken(user,token){
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      const storeToken = sessionStorage.setItem('token',JSON.stringify(token));
      const storeUser = sessionStorage.setItem('user',JSON.stringify(user));

      setToken(storeToken);
      setUser(storeUser);

      router.push('/dashboard');

    }
    console.log(user,token);
  }

  function logout(){
    sessionStorage.clear()
     router.push('/login')
  }

    const http = axios.create({
        baseURL:"http://localhost:8000/api",
        headers:{
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`
        }
    });

  return {
    http,
    saveToken,
    logout,
    token,
    user,
  }
}
