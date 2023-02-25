import React, { Component } from 'react';
import '../styles/home.css'
import {Container, Row,Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from '../shared/Subtitle'
import worldIMG from '../assets/images/world.png'
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';

import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
class Home extends Component {
    render() {
        return <>
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className='hero__content'>
                            <div className='hero__subtitle d-flex align-items-center'>
                                <Subtitle subtitle={'Know Before You Go'}/>
                                <img src ={worldIMG} alt=""></img>
                            </div>
                            <h1>Traveling opens the door to creating <span className= "highlight">memories</span></h1>
                            <p>lorem ipsum dolor sit</p>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className='hero__img-box'>
                            <img src={heroImg} alt=""></img>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className='hero__img-box mt-4'>
                            <video src={heroVideo} alt="" controls></video>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className='hero__img-box mt-5'>
                            <img src={heroImg02} alt=""></img>
                        </div>
                    </Col>
                    <SearchBar/>
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col lg ='3'>
                        <h5 className='services__subtitle'> what we serve</h5>
                        <h2 className='services__title'> we offer our best services</h2>
                    </Col>
                    <ServiceList/>
                </Row>
            </Container>
        </section>
        {/**========================== featured tour section start=================== */}
        <section>
            <Container>
                <Row>
                    <Col lg = "12" className='mb-5'>
                    <Subtitle  subtitle={"Explore"}/>
                    <h2 className='featured__tour-title'>Our featured tours</h2>
                    </Col>
                    <FeaturedTourList></FeaturedTourList>
                </Row>
            </Container>
        </section>
        {/**========================== featured tour section end=================== */}
        </>
    }
}

export default Home;