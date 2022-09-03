import React, {useState, useEffect} from 'react'

const SignUp = () => {  

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState({})

    const handleFirstName = e => {
        e.preventDefault()
        const name = e.target.value

        setFirstName(name)
    }

    const handleLastName = e => {
        e.preventDefault()
        const name = e.target.value

        setLastName(name)
    }

    const handleEmail = e => {
        e.preventDefault()
        const email = e.target.value


        setEmail(email)
    }

    const handlePassword = e => {
        e.preventDefault()
        const password = e.target.value


        setEmail(password)
    }

    const handleOnSubmit = e => {

        const newData = {
            'first_name': firstName,
            'last_name': lastName,
            'email': email,
            'password': password,
        }

        setData(newData)
    }
    
    return (
        <form onSubmit={handleOnSubmit}>
            <h3>Sign Up</h3>
            <div className="mb-3">
            <label>First name</label>
            <input
                type="text"
                className="form-control"
                placeholder="First name"
                onChange={handleFirstName}
            />
            </div>
            <div className="mb-3">
            <label>Last name</label>
            <input 
                type="text" 
                className="form-control" 
                placeholder="Last name" 
                onChange={handleLastName}
            />
            </div>
            <div className="mb-3">
            <label>Email address</label>
            <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={handleEmail}
            />
            </div>
            <div className="mb-3">
            <label>Password</label>
            <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={handlePassword}
            />
            </div>
            <div className="d-grid">
            <button type="submit" className="btn btn-primary">
                Sign Up
            </button>
            </div>
            <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
            </p>
        </form>
    );
}

export default SignUp;
