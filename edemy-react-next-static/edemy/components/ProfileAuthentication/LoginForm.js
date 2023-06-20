import React from 'react';
import Link from 'next/link';

const LoginForm = () => {
    return (
        <div className="login-form">
            <h2>Login</h2>

            <form>
                <div className="form-group">
                    <label>Username or email</label>
                    <input type="text" className="form-control" placeholder="Username or email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
                        <p>
                            <input type="checkbox" id="test2" />
                            <label htmlFor="test2">Remember me</label>
                        </p>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
                        <Link href="#">
                            <a className="lost-your-password">Lost your password?</a>
                        </Link>
                    </div>
                </div>

                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default LoginForm;