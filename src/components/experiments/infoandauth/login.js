import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { baseUrl } from '../../../baseUrl';
import { useNavigate } from 'react-router-dom';

const Login = ({ setActiveScreen }) => {
    const [wait, setWait] = useState("Login to Explore")
    const navigate = useNavigate();
    const onlyNumbersRegex = /^\d+$/;
    const [loginData, setLoginData] = useState({
        name: "",
        password: "",
    });
    const [errorData, setErrorData] = useState({
        name: false,
        password: false,
    })
    const [warningFromDatabase, setWarningFromDatabase] = useState();
    const handleChange = (e) => {
        const { name, value } = e?.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    }
    const login = (e) => {
        e.preventDefault();
        let data = {
            username: loginData?.name,
            password: loginData?.password,
        }
        console.log(data)
        if (data?.username === "") {
            setErrorData({
                ...errorData, name: true,
            })
        } else if (data?.password === "") {
            setErrorData({
                ...errorData, password: true,
            })
        } else {
            setErrorData({
                name: false,
                password: false,
            })
            setWait("Please wait...")
            axios.post(`${baseUrl}login/`, data).then((respo) => {
                setWarningFromDatabase(null)
                setWait("Login Successfully!")
                console.log(respo.data)
                localStorage.setItem('portfolioToken', JSON.stringify(respo.data.token))
                toast.success('Login Successfully!')
                setTimeout(() => {
                    navigate('/home/experiments/profile')
                    clearForm()
                }, 1000);
            }).catch((err) => {
                console.log(err?.response?.data)
                let warnData = err?.response?.data
                toast.error(warnData?.error)
                setWarningFromDatabase(warnData)
                setWait(warnData?.error)
                setTimeout(() => {
                    setWait("Please try again!")
                }, 1000);
            })
        }
    }
    const clearForm = () => {
        setLoginData({
            name: "",
            password: "",
        })
    }
    return (
        <div className='register-container'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className='login-register-left-container'>
                <div className='form-title-container'>
                    <h1 className='form-title'>My Experimental Universe</h1>
                    <p className='form-quote'>
                        Let's enter in my experimental universe to explore and fun with my experiments.
                        Put some information below to fun with my universe.
                    </p>
                </div>
                <div className='login-register-image-container'>
                    <img src='login.png' alt='login_space' />
                </div>
            </div>
            <div className='login-register-form-container'>
                <div className='register-form-container'>
                    <form onSubmit={(e) => login(e)}>
                        <div className='input-container'>
                            <label className='inputlabel' htmlFor="name">User Name</label>
                            <input
                                name='name'
                                id='name'
                                placeholder='Ex. Shubham14'
                                value={loginData?.name}
                                className='inputField'
                                onChange={handleChange}
                                onKeyUp={() => setErrorData({
                                    ...errorData, name: false
                                })}
                            />
                            <span style={{
                                opacity: errorData?.name || warningFromDatabase?.username ? "100" : "0",
                            }}
                                className='errorText'>{warningFromDatabase?.username ? warningFromDatabase?.username[0] : 'Enter valid user name, it may not contain whitespace, please!'}</span>
                        </div>
                        <div className='input-container'>
                            <label className='inputlabel' htmlFor="name">Password</label>
                            <input
                                name='password'
                                id='password'
                                placeholder='Enter your password'
                                value={loginData?.password}
                                className='inputField'
                                onChange={handleChange}
                                onKeyUp={() => setErrorData({
                                    ...errorData, password: false
                                })}
                            />
                            <span style={{
                                opacity: errorData?.password || warningFromDatabase?.error ? "100" : "0",
                            }}
                                className='errorText'>{warningFromDatabase?.error ? warningFromDatabase?.error : 'Enter correct password, please!'}</span>
                        </div>
                        <button className='submitButton'>{wait}</button>
                        <div className='lareadyQuote'>Not registered? <br />
                            <span
                                onClick={() => setActiveScreen('register')}
                                className='loginClass'>Register Now</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
