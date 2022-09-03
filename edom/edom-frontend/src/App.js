import React,{useState, useEffect} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import LogIn from './Components/Login'
import SignUp from './Components/SignUp'
import HomePage from './Components/HomePage'


const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const isNotAuthenticatedNav = () =>{
    return (
      <>
        <li className="nav-item">
          <Link className="nav-link" to={'/sign-in'}>
            Sign In
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/sign-up'}>
            Sign Up
          </Link>
        </li>
      </>
    );
  };

  const isAuthenticatedNav = () =>{
    return (
      <li className="nav-item">
        <Link className="nav-link" onClick={() => setIsAuthenticated(false)} to={'/'}>
          Log Out
        </Link>
      </li>
    );
  };

  const isNotAuthenticatedRoutes = () =>{
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route exact path="/" element={
            <LogIn 
              isAuthenticated={isAuthenticated} 
              setIsAuthenticated={setIsAuthenticated} 
            />} />
            <Route 
              path="/sign-in" 
              element={ 
                <LogIn 
                  isAuthenticated={isAuthenticated}
                  setIsAuthenticated={setIsAuthenticated}
              /> }
            />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    )
  }

  const isAuthenticatedRoutes = () =>{
    return (
      <div className="home-wrapper">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
      </div>
    )
  }

  const renderNav = () => {
    return (
      <div className="nav-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to={'/'}>
              e-DOM
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto">
                  {(!isAuthenticated)?isNotAuthenticatedNav():isAuthenticatedNav()}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  };

  return (
    <Router>
      <div className="App">
        {renderNav()}
        {isAuthenticated?isAuthenticatedRoutes():isNotAuthenticatedRoutes()}
      </div>
    </Router>
  )
}
export default App