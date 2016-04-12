
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Register from '../components/Register.jsx'

import { attemptRegister, navigatedAwayFromAuthFormPage } from '../actions/authActions.js';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickRegister: (formData) => {
      dispatch(ttemptRegister(formData.email, formData.password, "n/a"))
    }
  }
}

const RegisterPage = connect(
	mapStateToProps,
  	mapDispatchToProps
)(Register)

export default RegisterPage