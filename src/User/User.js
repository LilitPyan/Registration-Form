import React, { Component } from 'react';
import style from './User.module.css';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class User extends Component {    
    render() {
      const { userData } = this.props;

      return (
        <div className = { style.box }>
          <p> My name is: { this.props.userName }</p>
          <p> I am logged: { this.props.isLoggedIn ? "Yes" : "No" }</p>
          <Link to = "/login">
            <button>
              Log Out
            </button>
          </Link>
        </div>
      );
    }
}

const mapStateToProps = state => ({
  userData: state.userName,
  userData: state.isLoggedIn
});

export default connect(mapStateToProps, undefined)(User);

