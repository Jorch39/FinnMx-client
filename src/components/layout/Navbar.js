import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/auth/authContext';
import logo from './logo.png'

const Navbar = () => {

  //Extraer la información de autenticación
  const authContext = useContext(AuthContext);
  const { authenticatedUser, logout } = authContext;

  const [navbarClass, setNavbarClass] = useState('hidden')

  const handleNavbar = () => {
    if (navbarClass === 'hidden') {
      setNavbarClass('block')
    } else {
      setNavbarClass('hidden')
    }
  }

  useEffect(() => {
    authenticatedUser();
    //eslint-disable-next-line
  }, []);


  const isAuthenticated = () => {
    if (authenticatedUser) {
        return true
    } else {
        return false
  }
}



  return (
    <div className="navbar z-50" id='navbar'>
      {/* lg:hidden */}
      <div className="fixed w-full">
        <div className="flex items-center justify-between flex-wrap bg-black p-4">
          <div className="flex items-center flex-shrink-0 text-white mr-6"><p></p>
            <a href='/'><img src={logo} height="45" width="45" alt="Logo"></img></a>
          </div>
          <div onClick={handleNavbar} className="block lg:hidden  ">
            <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white transition duration-800 ">
              {navbarClass === 'hidden'
                ? <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title> <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path> </svg>
                : <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title> <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path> </svg>}
            </button>
          </div>
          <div id="div_navbar" className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${navbarClass}`}>
            <div className="text-sm lg:flex-grow">
            </div>
            <div >
              <a href="/login" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">Login</a>
              <a href="/sign-up" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">Signup</a>
              <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 btn btn-blank cerrar-sesion" onClick={() => logout()}>Cerrar Sesión</a>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

