import React, { Component } from 'react';
import style from './logIn.module.css';
import TransBtn from './../TransBtn/TransBtn.js';
import { logIn } from '../_actions/user.actions.js';
import { withTranslation } from 'react-i18next';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class LogIn extends Component {
    constructor(props){
        super(props);
        this.state = {
          fields: {
              email: '',
              password: ''
          },
          errors: {
              email: '',
              password: ''
          }
        };

     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleChange = this.handleChange.bind(this);
    }

    handleChange({ target: { name, value }}){
      this.setState({ 
        fields: {
          ...this.state.fields,
          [name]: value 
        }
      });
    }

    handleSubmit(e){
      e.preventDefault();
      const { email, password } = this.state.fields;
      
      if(email && password){
        this.props.logIn(email, password);
      } 
    } 

    render() {
      const { t, userData } = this.props;
      const { fields } = this.state;
        console.dir(userData);
 
      return (
        <div className={style.box}>
          <TransBtn/>
          {t("Log In")}
          <form onSubmit={this.handleSubmit}>
            <div className={style.boxItem}>
              <input 
                name="email"
                type="email" 
                placeholder={t("E-mail or phone used")}
                value={fields.email}
                onChange={this.handleChange}/>
              <input 
                name="password"
                type="password"
                placeholder={t("Password")}
                value={fields.password}
                onChange={this.handleChange}/>
              <span className={style.errors}>{userData.errorMessage}</span>
              <button type="submit" onClick={this.handleSubmit}>
                {t("Log In")}
              </button>
              <p> {t("Are you here for the firts time")}?</p>
              <Link to='signup'>
                <button>
                  {t("Sign Up")}
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
    logIn: (email, password) => dispatch(logIn(email, password))
  };
}

const mapStateToProps = state => ({
  userData: state.userData
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('translations')(LogIn));

