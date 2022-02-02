import React from 'react'
import { Link } from 'react-router-dom';
import { logout } from '../../actions/securityActions';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

const Header = ({logout, security}) => {

    const {validToken, user} = security;
    const signout = () => {
        logout();
        window.location.href="/";
    }
    const userIsNotAuthenticated = (
        <>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link " to="register">
                        Sign Up
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="login">
                        Login
                    </Link>
                </li>
            </ul>
        </>
    )

    const userIsAuthenticated=(
        <>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">
                        Dashboard
                    </Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link " to="/dashboard">
                    <i className="fas fa-user-circle mr1">
                        {user.fullName}
                    </i>    
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" onClick={signout}>
                        Logout
                    </Link>
                </li>
            </ul>
        </>
    )

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Personal Project Management Tool
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="mobile-nav">
                    {(validToken)? userIsAuthenticated : userIsNotAuthenticated}
                </div>
            </div>
        </nav>
    )
}

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    security: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    security: state.security
})

export default connect(mapStateToProps, {logout})(Header);