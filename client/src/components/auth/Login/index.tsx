import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import './Login.scss'
import { InitialValues, FormState, FormData } from '../interfaces/login'

const initialValues: InitialValues = {
	email: '',
	password: ''
}

const loginValidators: Yup.ObjectSchema<Yup.Shape<object | undefined, {
	email: string;
	password: string;
}>, object> = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email')
		.required('Required'),
	password: Yup.string()
		.min(2, 'Your password is too short!')
		.max(50, 'Your password is too long')
		.required('Required'),
})

const handleSubmit = (data: FormData) => {
	const { actions, values } = data
	console.log('actions', actions)
	console.log('values', values)
	alert(JSON.stringify(values, null, 2));
	actions.setSubmitting(false);
}

const Login = () => (
	<Formik
		initialValues={initialValues}
		validationSchema={loginValidators}
		onSubmit={(values: any, actions: any) => {
			const data: FormData = { actions, values }
			handleSubmit(data)
		}}
	>
		{({ errors, touched, isSubmitting }: FormState) => (
			<div className="container">
				<div className="login-title"><img src={require("../../../img/bakbar.png")} /></div>
				<div className="card login-input-form">
					<Form>
						<label htmlFor="email">Email</label>
						<Field className="input login-input is-primary is-medium" id="email" name="email" type="email" placeholder="Enter your email" />
						{touched.email && errors.email && <p className="fieldError">{errors.email}</p>}
						<label htmlFor="password">Pssword</label>
						<Field className="input login-input is-primary is-medium" id="password" name="password" type="password" placeholder="Enter your password" />
						{errors.password && touched.password ? <p className="fieldError">{errors.password}</p> : null}
						<div className="login-button-div">
							<button className="button login-button is-primary" type="submit" disabled={isSubmitting} >Submit</button>
						</div>
					</Form>
				</div>
			</div>
		)}
	</Formik>
)
export default Login

// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
// import classnames from 'classnames'
// import { Button } from '@material-ui/core'
// import { loginUser } from '../../actions/authActions'
// import { Routes } from '../../utils/routes'

// class Login extends Component {
// 	constructor() {
// 		super()
// 		this.state = {
// 			email: '',
// 			password: '',
// 			errors: {}
// 		}
// 	}

// 	componentDidMount() {
// 		// If logged in and user navigates to Login page, should redirect them to dashboard
// 		if (this.props.auth.isAuthenticated) {
// 			this.props.history.push(Routes.dashboard)
// 		}
// 	}

// 	componentWillReceiveProps(nextProps) {
// 		if (nextProps.auth.isAuthenticated) {
// 			this.props.history.push(Routes.dashboard)
// 		}
// 		if (nextProps.errors) {
// 			this.setState({
// 				errors: nextProps.errors
// 			})
// 		}
// 	}

// 	onChange = event => this.setState({ [event.target.id]: event.target.value })

// 	onSubmit = event => {
// 		event.preventDefault()
// 		const userData = {
// 			email: this.state.email,
// 			password: this.state.password
// 		}
// 		this.props.loginUser(userData)
// 	}

// 	render() {
// 		const { errors } = this.state

// 		return (
// 			<div className='container'>
// 				<div style={{ marginTop: '1rem' }} className='row'>
// 					<div className='col s8 offset-s2'>
// 						<div className='col s12' style={{ paddingLeft: '11.250px' }}>
// 							<h4>
// 								<b>Login</b>
// 							</h4>
// 							<p className='grey-text text-darken-1'>
// 								Don't have an account? <Button component={Link} to={Routes.register}>Register</Button>
// 							</p>
// 						</div>
// 						<form noValidate onSubmit={this.onSubmit}>
// 							<div className='input-field col s12'>
// 								<input
// 									onChange={this.onChange}
// 									value={this.state.email}
// 									error={errors.email}
// 									id='email'
// 									type='email'
// 									className={classnames('', { invalid: errors.email || errors.emailnotfound })}
// 								/>
// 								<label htmlFor='email'>Email</label>
// 								<span className='red-text'>
// 									{errors.email}
// 									{errors.emailnotfound}
// 								</span>
// 							</div>
// 							<div className='input-field col s12'>
// 								<input
// 									onChange={this.onChange}
// 									value={this.state.password}
// 									error={errors.password}
// 									id='password'
// 									type='password'
// 									className={classnames('', { invalid: errors.password || errors.passwordincorrect })}
// 								/>
// 								<label htmlFor='password'>Password</label>
// 								<span className='red-text'>
// 									{errors.password}
// 									{errors.passwordincorrect}
// 								</span>
// 							</div>
// 							<div className='col s12' style={{ paddingLeft: '11.250px' }}>
// 								<Button variant="contained" color="primary" type="submit">Login</Button>
// 							</div>
// 						</form>
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// Login.propTypes = {
// 	loginUser: PropTypes.func.isRequired,
// 	auth: PropTypes.object.isRequired,
// 	errors: PropTypes.object.isRequired
// }

// const mapStateToProps = state => ({
// 	auth: state.auth,
// 	errors: state.errors
// })

// export default connect(mapStateToProps, { loginUser })(Login)