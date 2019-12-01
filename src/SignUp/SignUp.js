import React, {Component} from 'react';
import style from './signUp.module.css';
import TransBtn from './../TransBtn/TransBtn.js';
import { signUp } from '../_actions/user.actions.js';
import { withTranslation } from 'react-i18next';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

function emailValidation(email) { 
    let mailformat = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
    let errorMessage = '';
    let isValid = true;

    if (mailformat.test(email) !== true) {
        isValid = false;
        errorMessage = 'email is not valid';
    } else if (email.length <= 16) {
        isValid = false;
        errorMessage = 'email is not valid';
    }

    return {
        errorMessage,
        isValid,
    };
}

function passwordValidation(password, confirmPassword) {
    let errorMessage = '';
    let isValid = true;

    if (password.length <  8) {
        isValid = false;
        errorMessage = 'password min length is 8';
    } else if (confirmPassword && password !== confirmPassword) {
        isValid = false;
        errorMessage = 'password did not match';
    }

    return {
        errorMessage,
        isValid,
    };      
}

class SignUp extends Component {   
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: '',
                confirmPassword: '',
                userName: ''
            },
            errors: {
                email: '',
                password: ''
            }

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange({ target: { name, value }}) {
        this.setState({ 
            user: {
             ...this.state.user, 
             [name]: value 
            } 
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { email, password, confirmPassword, userName } = this.state.user;
        const errors = {};
        
        const { isValid: isEmailValid, errorMessage: emailErrorMessage } = emailValidation(email);
        if (!isEmailValid) {
            errors.email = emailErrorMessage;
        }

        const { isValid: isPasswordValid, errorMessage: passwordErrorMessage } = passwordValidation(password, confirmPassword);
        if (!isPasswordValid) {
            errors.password = passwordErrorMessage;
        }

        this.setState({ errors });

        const { user } = this.state;
        if (user.email && user.password && user.confirmPassword && user.userName && isEmailValid && isPasswordValid) {
            this.props.signUp(this.state.user); 
        }

    } 

    render() {
        const { user, errors } = this.state;
        const { t, signUp } = this.props;
            
        return (
          <div className = {style.box}>
            <TransBtn />
            {t("Sign Up")}
            <form onSubmit = {this.handleSubmit}>
                <div className = {style.boxItem}>
                    <input 
                        type = "email" 
                        placeholder = {t("Enter your E-mail")}
                        value = {user.email}
                        name = 'email'
                        onChange = {this.handleChange}/>
                    <span className={style.errors}>{errors.email}</span>
                    <input 
                        type = "password"
                        name = "password"
                        placeholder = {t("Enter your Password")}
                        value = {user.password}
                        onChange = {this.handleChange}/>
                    <span className={style.errors}>{errors.password}</span>
                    <input 
                        type = "password" 
                        name = "confirmPassword"
                        placeholder = {t("Confirm Password")}
                        value = {user.confirmPassword}
                        onChange = {this.handleChange}/>
                    <input 
                        type = "text" 
                        name = "userName"
                        placeholder = {t("Enter your name")}
                        value = {user.userName}
                        onChange = {this.handleChange}/>
                    <button
                        type = "submit" 
                        onClick = {this.handleSubmit}>
                        {t("Sign Up")}
                    </button> 
                       <p>{t("Already registered")}?</p> 
                    <Link to = "/login">
                    <button>
                        {t("Log In")}
                        </button>
                    </Link>
                </div>
            </form>  
          </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: user => dispatch(signUp(user))
    };
}

const mapStateToProps = state => ({
  userData: state.userData
})

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('translations')(SignUp));
