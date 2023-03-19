import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './newsletter.css';
import maleTourist  from '../assets/images/male-tourist.png';
const Newsletter = () => {
    return (
        <section className='newsletter'>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className='newsletter__content'>
                            <h2>Subscribe to our newsletter</h2>
                            <div className='newsletter__input'>
                                <input type='email' placeholder='Enter your email' />
                                <button className='newsletter__btn'>Subscribe</button>
                            </div>
                            <p>Subscribe to our newsletter and get 10% off your first purchase</p>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className='newsletter__img'>
                            <img src={maleTourist} alt="" />
                        </div>
                    </Col>

                </Row>

            </Container>
        </section>
    );
};

export default Newsletter;