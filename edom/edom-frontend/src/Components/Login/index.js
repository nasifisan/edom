import React, {useState, useEffect, useCallback} from 'react'
import { Navigate } from 'react-router-dom'

function LogIn({ isAuthenticated, setIsAuthenticated }){  

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})

    useEffect(() => {
        fetch('http://localhost:8000/api/user/list')
            .then(data => data.json())
            .then(res => setUserData(res))
    }, [])

    const handleUserAuthentication = () =>{
        const okay = userData.filter(item => item.email === email)

        if(okay.length) {
            setIsAuthenticated(true)
        }
    }

    const handleOnChangeEmail = e => {
        e.preventDefault()
        const value = e.target.value

        console.log(value)

        setEmail(value)
    }

    const handleOnChangePassword = e => {
        e.preventDefault()
        const value = e.target.value

        console.log(value)

        setPassword(value)
    }

    console.log(userData)

    if(isAuthenticated){
        return (
            <Navigate
                to={{
                    pathname: "/",
                    }}
            />
        )
    }

    console.log(isAuthenticated)
    
    return (
        <>
            <form onSubmit={handleUserAuthentication}>
                <h3>Sign In</h3>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={handleOnChangeEmail}
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={handleOnChangePassword}
                    />
                </div>
                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        </>
    );
}

export default LogIn;
