import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { authActions } from "../store/slice/auth-slice"

const useAuth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const isPasswordConfirmed = () => {
        if (password && confirmPassword && password === confirmPassword) return true;
        return false
    }
    const handleSignUp = async (e) => {
        e.preventDefault()
        try {
            if (!isPasswordConfirmed(password, confirmPassword)) {
                alert('Password & confirm password should be same!')
            } else {
                if (email != '' && password != '' && confirmPassword != '') {
                    const data = {
                        email: email,
                        password: password,
                        returnSecureToken: true

                    }
                    const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBbr840gxPXx5wIRgO2KsmQYQpwHJKG91s', data, {
                        headers: {
                            'Content-Type': 'application/json',

                        }
                    })

                    setEmail('')
                    setPassword('')
                    setConfirmPassword('')

                    alert('Signup Successful!')
                    navigate('/login')
                }
            }
        } catch (err) {
            console.log(err.message)
            alert(err.response.data.error.message)
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            if (email != '' && password != '') {
                let data = {
                    email: email,
                    password: password,
                    returnSecureToken: true
                }
                const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBbr840gxPXx5wIRgO2KsmQYQpwHJKG91s', data, {
                    headers: {
                        'Content-Type': 'application/json',


                    }
                })
                if (response.data.idToken) {
                    let token = response.data.idToken
                    let email = response.data.email
                    localStorage.setItem('token', token)
                    localStorage.setItem('email', email)
                    dispatch(authActions.addToken(token))
                    alert('Login Successful!')
                    navigate('/')

                }
            }

        } catch (err) {
            console.log(err.message)
            alert(err.response.data.error.message)

        }
    }

    return { handleSignUp, handleLogin, email, password, confirmPassword, setEmail, setPassword, setConfirmPassword }
}

export default useAuth