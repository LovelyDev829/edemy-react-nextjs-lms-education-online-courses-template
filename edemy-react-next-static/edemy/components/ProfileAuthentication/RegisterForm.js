import React from 'react';

const RegisterForm = () => {
    return (
        <div className="register-form">
            <h2>Register</h2>

            <form>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username or email" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Username or email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>

                <p className="description">The password should be at least eight characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & )</p>

                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegisterForm;