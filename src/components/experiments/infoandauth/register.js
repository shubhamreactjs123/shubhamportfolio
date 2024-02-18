import axios from 'axios'
import React, { useState } from 'react'
import { baseUrl } from '../../../baseUrl';
import toast, { Toaster } from 'react-hot-toast';

const Register = ({ setActiveScreen }) => {
    const [wait, setWait] = useState("Start Exploring")
    const onlyNumbersRegex = /^\d+$/;
    const [registerData, setRegisterData] = useState({
        first_name: "",
        last_name: "",
        name: "",
        email: "",
        mobile: "",
    });
    const [errorData, setErrorData] = useState({
        first_name: false,
        last_name: false,
        name: false,
        email: false,
        mobile: false,
        mobileLength: false,
    })
    const [warningFromDatabase, setWarningFromDatabase] = useState();
    const handleChange = (e) => {
        const { name, value } = e?.target;
        setRegisterData({
            ...registerData,
            [name]: value
        });
    }
    const containsWhitespace = (str) => {
        return /\s/.test(str);
    }
    const register = (e) => {
        e.preventDefault();
        let data = {
            first_name: registerData?.first_name,
            last_name: registerData?.last_name,
            username: registerData?.name,
            email: registerData?.email,
            mobile: '+91' + registerData?.mobile
        }
        console.log(data)
        if (data?.first_name === "") {
            setErrorData({
                ...errorData, first_name: true,
            })
        } else if (data?.last_name === "") {
            setErrorData({
                ...errorData, last_name: true,
            })
        } else if (data?.username === "" || containsWhitespace(data?.username)) {
            setErrorData({
                ...errorData, name: true,
            })
        } else if (data?.email === "") {
            setErrorData({
                ...errorData, email: true,
            })
        } else if (data?.mobile === "") {
            setErrorData({
                ...errorData, mobile: true,
            })
        } else if (data?.mobile?.length < 10) {
            setErrorData({
                ...errorData, mobileLength: true,
            })
        } else {
            setErrorData({
                first_name: false,
                last_name: false,
                name: false,
                email: false,
                mobile: false,
                mobileLength: false,
            })
            setWait("Please wait...")
            axios.post(`${baseUrl}register/`, data).then((respo) => {
                setWarningFromDatabase(null)
                setWait("Registered Successfully!")
                toast.success('Registered Successfully!')
                setTimeout(() => {
                    clearForm()
                    setWait("Start Exploring")
                }, 1000);
            }).catch((err) => {
                toast.error("Some thing went wrong!")
                console.log(err?.response?.data)
                let warnData = err?.response?.data
                setWarningFromDatabase(warnData)
                setWait("Some thing went wrong!")
                setTimeout(() => {
                    setWait("Please try again!")
                }, 1000);
            })
        }

    }
    const clearForm = () => {
        setRegisterData({
            first_name: "",
            last_name: "",
            name: "",
            email: "",
            mobile: "",
        })
    }
    console.log(warningFromDatabase)
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
                    <form onSubmit={(e) => register(e)}>
                        <div className='first-last-name-container'>
                            <div className='input-container'>
                                <label className='inputlabel' htmlFor="first_name">First Name</label>
                                <input
                                    name='first_name'
                                    id='first_name'
                                    placeholder='Ex. Shubham'
                                    value={registerData?.first_name}
                                    className='inputField'
                                    onChange={handleChange}
                                    onKeyUp={() => setErrorData({
                                        ...errorData, first_name: false
                                    })}
                                />
                                <span style={{
                                    opacity: errorData?.first_name ? "100" : "0",
                                }}
                                    className='errorText'>Enter your first name, please!</span>
                            </div>
                            <div className='input-container'>
                                <label className='inputlabel' htmlFor="last_name">Last Name</label>
                                <input
                                    name='last_name'
                                    id='last_name'
                                    placeholder='Ex. Dubey'
                                    value={registerData?.last_name}
                                    className='inputField'
                                    onChange={handleChange}
                                    onKeyUp={() => setErrorData({
                                        ...errorData, last_name: false
                                    })}
                                />
                                <span style={{
                                    opacity: errorData?.last_name ? "100" : "0",
                                }}
                                    className='errorText'>Enter your last name, please!</span>
                            </div>
                        </div>
                        <div className='input-container'>
                            <label className='inputlabel' htmlFor="name">User Name</label>
                            <input
                                name='name'
                                id='name'
                                placeholder='Ex. Shubham14'
                                value={registerData?.name}
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
                            <label className='inputlabel' htmlFor="email">Email Id</label>
                            <input
                                name='email'
                                id='email'
                                placeholder='Ex. subham02101997@gmail.com'
                                value={registerData?.email}
                                className='inputField'
                                onChange={handleChange}
                                type='email'
                                onKeyUp={() => setErrorData({
                                    ...errorData, email: false
                                })}
                            />
                            <span style={{
                                opacity: errorData?.email || warningFromDatabase?.email ? "100" : "0",
                            }}
                                className='errorText'>{warningFromDatabase?.email ? warningFromDatabase?.email[0] : 'Enter your email id, please!'}</span>
                        </div>
                        <div className='input-container'>
                            <label className='inputlabel' htmlFor="mobile">Mobile Number</label>
                            <input
                                name='mobile'
                                id='mobile'
                                placeholder='Ex. 8130708951'
                                className='inputField'
                                maxLength={10}
                                value={registerData?.mobile}
                                onChange={(e) => {
                                    if (onlyNumbersRegex.test(e?.target?.value) || e?.target?.value === '') {
                                        handleChange(e)
                                    }
                                }}
                                onKeyUp={() => setErrorData({
                                    ...errorData, mobile: false
                                })}
                            />
                            <span style={{
                                opacity: errorData?.mobile || errorData?.mobileLength || warningFromDatabase?.mobile ? "100" : "0",
                            }}
                                className='errorText'>{errorData?.mobileLength ? "Enter 10 didgit mobile number, please!" : warningFromDatabase?.mobile ? warningFromDatabase?.mobile[0] : "Enter your mobile number, please"}!</span>
                        </div>
                        <button className='submitButton'>{wait}</button>
                        <div className='lareadyQuote'>Already registered? <br />
                            <span
                                onClick={() => setActiveScreen('login')}
                                className='loginClass'>Login Now</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
