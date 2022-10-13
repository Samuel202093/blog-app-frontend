import React, {useState} from 'react'
import {motion} from 'framer-motion'
import { GiNewspaper } from 'react-icons/gi'
import {GiCancel} from 'react-icons/gi'
import {FcGoogle} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/context'
import * as Yup from 'yup'
import { Formik,Form } from 'formik'
import TextField from './TextField'
import { auth,provider } from '../firebase/Firebase'
import { signInWithEmailAndPassword,signInWithPopup, signInWithRedirect} from 'firebase/auth'
import { useAuthContext } from '../context/AuthContext'
import { GrStatusGood } from 'react-icons/gr'
import newsApi from '../api/newsAPI'





const SignIn = () => {
  const {dispatch} = useAuthContext()
  // state to control the success modal display
  const [success, setSuccess] = useState('')

  const [showSubmit, setShowSubmit] = useState(false)

  const [submit, setSubmit] = useState('Submit')
  // the regex for the password
  const passwordrule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/;
  // handleshowsignin is gotten from the context and is used to open and close the signin. it is a boolean value
  const {handleShowSignIn, handleSignUp} = useAppContext()
  const navigate = useNavigate()
  // gotoSignUp function first close the sign in modal and then reroutes to the signup page
  const gotoSignUp = () => {
     handleShowSignIn()
     handleSignUp()
     console.log(1);
    //  navigate('/signup')
  }

  // handles sign in using google
  const signInUserWithGoogle = async() => {
    try {
     const userResult = await signInWithPopup(auth, provider)
     console.log(userResult.user);
     handleShowSignIn()
    } catch (error) {
      setSuccess('Connection Error!!')
      alert(error.message)
    }

  }

  // handle sign in with user name and password
  const signInUserWithEmailPassword = async(email,password) => {
    try {
      const userCredential =  await signInWithEmailAndPassword(auth,email,password)
      console.log(userCredential.user);
      dispatch({
        type:'LOGIN',
        payload: userCredential.user
      })
       setSuccess('Successful!!!')
       setTimeout(() => {
       handleShowSignIn()
        
       }, 2000);

    } catch (error) {
      console.log(error.message);
      if(error.message.includes('wrong-password')){
        setSuccess('Password is incorrect')
      }
      if(error.message.includes('user-not-found')){
        setSuccess('Email Not Registered')
      }
    }
  }

    return(
       <Formik
       initialValues={{email:'', password:''}}
       validationSchema={
        Yup.object({
           email: Yup.string()
                  .email('Invalid email address')
                  .required('Required'),
          password:  Yup.string()
                    .min(5)
                    // .matches(passwordrule, {message:'Please create a strong password'})
                    .required('Required')
        })
       }
       onSubmit={(values)=>{
        // signInUserWithEmailPassword(values.email, values.password)
        // signInWithEmailAndPassword(auth,values.email,values.password)
        // .then( result => console.log(result.user))
        // .catch(error => console.log(error.message))
        setShowSubmit(true)
        newsApi.post('/api/loginUser',{
          email: values.email,
          password: values.password
        }).then((response)=> {
           console.log(response);
          if(response.status === 200){
            console.log(response.config.data)
            dispatch({
              type:'LOGIN',
              payload: response
            })
             setShowSubmit(false)
             setSubmit('Logged In')
             setSuccess('Successful!!!')
             setTimeout(() => {
             handleShowSignIn()
              
             }, 2000);
          }

          if (response.status === 205) {
            navigate('/admin')
            setSubmit('Logged In')
            setSuccess('Successful!!!')
            setTimeout(() => {
              handleShowSignIn()   
              }, 2000);
          } 
        }).catch((error)=> {
          console.log(error);
          setShowSubmit(false)
          setSubmit('Try Again')

          // setSuccess('Invalid Credentials')
          setSuccess(error.message)
          // if(error.message.includes('wrong-password')){
          //   setSuccess('Password is incorrect')
          // }
          // if(error.message.includes('user-not-found')){
          //   setSuccess('Email Not Registered')
          // }
        })
      
       }}
       >
        {
          formik => (
                <div className='fixed h-full w-full top-0 right-0 bg-[rgba(0,0,0,0.8)] flex justify-center items-center z-[100000]'>
                  <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{duration: 0.5}} className='md:w-[31.25rem] md:h-[31.25rem] py-10 px-5 bg-white rounded-lg text-black flex flex-col justify-center items-center gap-6 relative'>
                    <span className='absolute top-[0] right-[0] text-2xl text-[rgba(0,0,0,0.8)] cursor-pointer' onClick={()=> handleShowSignIn()}><GiCancel/></span>
                    <div className='flex flex-col items-center'>
                     <GiNewspaper className='text-6xl'/>
                      <h2 className='text-2xl font-sans'>Sign In</h2>
                    </div>
              
                    <Form onSubmit={formik.handleSubmit}>
                      <div className='flex flex-col gap-4'>
                          <TextField type="email" placeholder='Enter your email' name='email' className='w-[18.75rem] border p-2 rounded-2xl' />
                          <TextField type="password" placeholder='Enter your password' name='password' className='w-[18.75rem] border p-2 rounded-2xl' />
                          <button type="submit" className='w-[18.75rem] border p-2 rounded-2xl text-white bg-[rgba(0,0,0,0.8)] flex justify-center'>
                           {showSubmit ? <p className='loader'></p> : submit}
                          </button>
                          {/* <label htmlFor="" className='w-full block border p-2 h-[50px]'>
                            <p className='loader inline-block'></p>
                            <input type="submit" value="" className='' />
                          </label>
                          <span className='loader'></span> */}
                      </div>
                    </Form>
                    
                    <div className='flex flex-col gap-4 justify-center items-center border-t pt-4 relative'>
                      <span className='absolute top-[-18px] p-1 bg-white' >Or</span>
                      <button className='w-[18.75rem] p-2 border rounded-2xl flex justify-center items-center gap-1' onClick={signInUserWithGoogle}><span>Sign in with google | </span><span><FcGoogle/></span></button>
                      <button onClick={gotoSignUp}>Don't have an account? <span className='underline'>Sign Up</span></button>
                    </div>
                       
                  </motion.div>
                  {success && <motion.div className='absolute top-4 left-[50%] ml-[-100px] w-[200px] bg-white rounded-sm h-fit  flex gap-x-1 py-2 px-2 items-center justify-center text-sm'
        initial={{ y:-100}}
        animate={{y:0}}
        transition={{type:'spring', stiffness:120}}
       >
          <GrStatusGood className='text-green-800'/> <span>{success} </span> 
       </motion.div>}
              </div>
          )
        }
       </Formik>

    )
}

export default SignIn