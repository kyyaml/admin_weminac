import React, { useState, useEffect } from 'react';

//import hook useHitory from react router dom
import { useNavigate} from 'react-router-dom';

//import axios
import axios from 'axios';

export default function Header() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
  
    //token
    const token = localStorage.getItem("token");
  
    //function "fetchData"
    const fetchData = async () => {
  
        //set axios header dengan type Authorization + Bearer token
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        //fetch user from Rest API
        await axios.get('http://localhost:8000/api/user')
        .then((response) => {
  
            //set response user to state
            setUser(response.data);
        })
    }
  
    //hook useEffect
    useEffect(() => {
  
        //check token empty
        if(!token) {
  
            //redirect login page
            navigate('/login');
        }
        
        //call function "fetchData"
        fetchData();
    }, []);
  
    //function logout
    const logoutHandler = async () => {
  
        //set axios header dengan type Authorization + Bearer token
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        //fetch Rest API
        await axios.post('http://localhost:8000/api/logout')
        .then(() => {
  
            //remove token from localStorage
            localStorage.removeItem("token");
  
            //redirect halaman login
            navigate('/login');
        });
    };
  
   


    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">

                <div className="d-flex align-items-center justify-content-between">
                    <a href="/" className="logo d-flex align-items-center">
                        <img src="assets/img/logo.png" alt="" />
                        <span className="d-none d-lg-block">Weminac</span>
                    </a>
                    <i className="bi bi-list toggle-sidebar-btn"></i>
                </div>
                {/* <!-- End Logo --> */}

                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">

                        <li className="nav-item dropdown pe-3">

                            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                                <span className="d-none d-md-block dropdown-toggle ps-2">{user.name}</span>
                            </a>
                            {/* <!-- End Profile Iamge Icon --> */}

                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">

                                <li>
                                    <a className="dropdown-item d-flex align-items-center" onClick={logoutHandler} >
                                        <i className="bi bi-box-arrow-right"></i>
                                        <span>Sign Out</span>
                                    </a>
                                </li>

                            </ul>
                            {/* <!-- End Profile Dropdown Items --> */}
                        </li>
                        {/* <!-- End Profile Nav --> */}

                    </ul>
                </nav>
                {/* <!-- End Icons Navigation --> */}

            </header>


        </>
    )
}
