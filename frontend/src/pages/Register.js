import React, { useState } from 'react'
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import '../styles/login.css'

import registerImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'


const Register = () => {
    const[credentials, setCredentias] = useState({
        userName:undefined,
        email:undefined,
        password:undefined
    })

    const handleChange  = e =>{
        setCredentias(prev =>({...prev, [e.target.id]:e.target.value}))
    }
    const handleClick = e =>{
        e.preventDefault();
    }
  return <section>
    <Container>
        <Row>
            <Col lg = '8' className='m-auto'>
                <div className='login__container d-flex justify-content-between'>
                    <div className='login__img'>
                        <img src={registerImg} alt =""></img>
                    </div>
                    <div className='login__form'>
                        <div className='user'>
                            <img src={userIcon} alt = ""/>
                        </div>
                        <h2>Register</h2>
                        <Form onSubmit={handleClick}>
                        <FormGroup>
                                <input type='text' placeholder='user name' required id = "userName" onChange={handleChange}></input>
                            </FormGroup>
                            <FormGroup>
                                <input type='text' placeholder='Email' required id = "email" onChange={handleChange}></input>
                            </FormGroup>
                            <FormGroup>
                                <input type='password' placeholder='Password' required id = "password" onChange={handleChange}></input>
                            </FormGroup>
                            <Button className='btn secontary_btn auth__btn' type='submit'>Create account</Button>
                        </Form>
                        <p>Already have an account? <Link to ='/login'>Login</Link></p>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Register;
