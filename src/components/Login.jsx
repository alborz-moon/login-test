import React, { useState,useEffect } from 'react';


function Login() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState();

    useEffect(() => {
        setError(false)
        fetch(`http://localhost:3001/users?email=${email}`)
        .then(response => response.json())
        .then(users => {
            if( users.length){
                setError(true)
            }
        })
    },[email]);

    return ( 
        <>
            <div className="login-box">
              <h2>Login</h2>
              <form>
                <div className="user-box">
                  <input type="text" name="" required="" onChange={(e) => setEmail(e.target.value) }/>
                  {error && <p className="p-color">That's not right!!!</p>}
                  <label>Username</label>
                </div>
                <div className="user-box">
                  <input type="password" name="" required="" />
                  <label>Password</label>
                </div>
                <a href="#">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
                </a>
              </form>
            </div>
        </>
     );
}

export default Login;