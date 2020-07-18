import React, { useState } from 'react';


function Register() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [passwordConfirm, setPasswordConfirm] = useState()


    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handlePasswordConfirm = (e) => {
        setPasswordConfirm(e.target.value)
    }


    const handleSubmitRegister = (e) => {
        e.preventDefault()

        const log = {username:name,password:password}

        fetch('http://127.0.0.1:8000/api/users/',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(log)
        })
        .then(data =>data.json())
        .then(
            data =>{
                console.log(data.token)
            }
        ).catch(
            error => console.error(error)
            
            
        )

    }


    return (
        <>
            <div className="App">
                <div>Registration</div>

                <form onSubmit={handleSubmitRegister}>
                    <input type="text" value={name} onChange={handleName} />
                    {/* <input type="email" value={email} onChange={handleEmail} /> */}
                    <input type="password" value={password} onChange={handlePassword} />
                    {/* <input type="password" value={passwordConfirm} onChange={handlePasswordConfirm} /> */}

                    <input type="submit" />
                </form>


            </div>
        </>
    );
}

export default Register;