import User from '../../models/User'

export { default as Login } from './components/Login'
export { default as Signup } from './components/Signup'

export interface Auth {
	isAuthenticated: boolean,
	loading: boolean,
	user: User
}