import React from 'react'
import Link from 'next/link'
import Axios from '../lib/axios'


export default function Layout({children}) {

    const {logout, token} = Axios();

    const logoutHandle=()=>{
        if(token != undefined){
            logout();
        }
    }

  return (
    <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
                <Link href="#">
                    <a className="navbar-brand">Fixed navbar</a>
                </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                
                <li className="nav-item">
                <Link href="/dashboard">
                    <a className="nav-link">Dashboard</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/login">
                    <a className="nav-link">Login</a>
                    </Link>
                 </li>
                <li className="nav-item">
                    <p role="button" onClick={logoutHandle} className="nav-link">Logout</p>
                 </li>

                </ul>
            </div>
            </div>
        </nav>

        <main className="container mt-5">
            <div className="bg-light p-5 rounded">
                {children}
            </div>
        </main>

</div>
  )
}
