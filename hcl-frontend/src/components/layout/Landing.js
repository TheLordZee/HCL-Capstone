import React from 'react';
import { Link } from 'react-router-dom';

const Landing = ({security}) => {
    const {validToken, user} = security;
  return (
    <div className="landing">
        <div className="light-overlay landing-inner text-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="display-3 mb-4">Project Management Tool</h1>
                        <p className="lead">
                            A simple, easy to use tool for managing your projects and keeping your tasks organized.
                        </p>
                        <hr />
                        {(validToken)? <div>
                            <h2>Welcome {user.fullName}</h2>
                            <Link to="/dashboard" className="btn btn-lg btn-primary mr-2">
                                Dashboard
                            </Link>
                        </div> :
                            <>
                            <Link 
                                to="register" 
                                className="btn btn-lg btn-primary mr-2"
                            >
                                Sign Up
                            </Link>
                            <Link 
                                to="login" 
                                className="btn btn-lg btn-secondary mr-2"
                            >
                                Login
                            </Link>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Landing;
