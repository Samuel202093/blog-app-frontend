import React from 'react'
import { Formik, Form, } from 'formik'
import * as Yup from 'yup'
import { GiNewspaper } from 'react-icons/gi'
import {GiCancel} from 'react-icons/gi'
import { Link,Outlet, useNavigate} from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAppContext } from '../context/context'
import TextField from './TextField'
// import {auth} from '../firebase/Firebase'
// import {createUserWithEmailAndPassword} from 'firebase/auth'
import { GrStatusGood } from 'react-icons/gr'
import { useState } from 'react'
import newsApi from '../api/newsAPI'


const SignUp = ()=>{
  const {handleShowSignIn, handleSubmit, handleSignUp} = useAppContext()
  const [success, setSuccess] = useState('')
  const [showSubmit, setShowSubmit] = useState(false)
  const [submit, setSubmit] = useState('Submit')
  const navigate = useNavigate()

  const gotoSignIn = ()=>{
    handleSignUp()
    handleShowSignIn()
  }

  const handleNavigate = ()=>{
    setTimeout(()=>{
      handleSignUp()
      handleShowSignIn()
    },1500)
  }


  const passwordrule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/;
  return(
    <Formik
      initialValues={{ username:'',email:'',password:'',confirmPassword:''}}
      validationSchema={
        Yup.object({
          email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
          username: Yup.string()
                // .email('Invalid email address')
                .required('Required'),
          password: Yup.string()
                    .min(5)
                    // .matches(passwordrule, {message: 'Please create a strong password'})
                    .required('Required'),
          confirmPassword: Yup.string()
                           .oneOf([Yup.ref('password'), null], 'Password must match')
                           .required('Required')
        })
      }
      onSubmit={(values)=>{
        // CreateUser(values.email, values.confirmPassword)
        setShowSubmit(true)
        newsApi.post('/api/createuser',{
          username: values.username,
          email: values.email,
          password: values.confirmPassword
        }).then((response)=>{
          setShowSubmit(false)
          setSubmit('Done!!!')
          setSuccess('Successful!!!')
          handleNavigate()
          console.log(response)
        }).catch((error)=>{
          console.log(error.message);
          setShowSubmit(false)
          setSubmit('Try Again')
          setSuccess('Email Already in use!!!')
        })  
      }}
    >
      {
        formik => (
          <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{ delay:0.2, duration: 0.5}} className='fixed h-full w-full top-0 right-0 bg-[rgba(0,0,0,0.8)] flex justify-center items-center z-[1000]'>
            <motion.div animate={{ x:0}} initial={{ x:500}} transition={{ type:'spring',stiffness:120, delay:0.1, duration: 0.5}} className='md:w-[31.25rem] md:h-[31.25rem] py-10 px-5 bg-white rounded-lg text-black flex flex-col justify-center items-center gap-6 relative'>
              <span className='absolute top-[0] right-[0] text-2xl text-[rgba(0,0,0,0.8)] cursor-pointer'
              onClick={handleSignUp}
              >
                <Link to={'/'}><GiCancel/></Link>
              </span>
              <div className='flex flex-col items-center'>
              <GiNewspaper className='text-6xl'/>
                <h2 className='text-2xl font-sans'>Sign Up</h2>
              </div>
              {console.log(formik.values)}
              <Form onSubmit={formik.handleSubmit}>
                <div className='flex flex-col gap-4'>
                   <TextField type='text' placeholder='Enter your Username' name='username' className='w-[18.75rem] border p-2 rounded-2xl'/>
                  <TextField type='email' placeholder='Enter your email' name='email' className='w-[18.75rem] border p-2 rounded-2xl'/>
                  <TextField type='password' placeholder='Enter your password' name='password' className='w-[18.75rem] border p-2 rounded-2xl'/>
                  <TextField type='password' placeholder='Confirm your password' name='confirmPassword' className='w-[18.75rem] border p-2 rounded-2xl'/>
                  <button type="submit" className='w-[18.75rem] border p-2 rounded-2xl text-white bg-[rgba(0,0,0,0.8)] flex justify-center'>
                    {showSubmit ? <p className='loader'></p> : submit}
                  </button>
                </div>
              </Form>
              
              <div className='flex flex-col justify-center items-center relative'>
                <span onClick={gotoSignIn}>Already have an account? <span className='underline'>Sign In</span></span>
              </div>

                
            </motion.div>
            {success && <motion.div className='absolute top-4 left-[50%] ml-[-100px] w-[200px] bg-white rounded-sm h-fit  flex gap-x-1 py-2 px-2 items-center justify-center text-sm'
        initial={{ y:-100}}
        animate={{y:0}}
        transition={{type:'spring', stiffness:120}}
       >
          <GrStatusGood className='text-green-800'/> <span>{success} </span> 
       </motion.div>}
          <Outlet />
      </motion.div>
        )
      }

    </Formik>
  )
 }

export default SignUp