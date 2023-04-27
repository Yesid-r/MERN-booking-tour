import React from 'react';
import TourCard from '../../shared/TourCard';
import tourData from '../../assets/data/tours'
import { Col } from 'reactstrap'; 

import useFetch from './../../hooks/useFetch'
import { BASE_URL } from '../../utils/config';

const FeaturedTourList = () => {

    const {data: featuredTours} = useFetch(`${BASE_URL}/tours/search/getFeaturedTour`)
    return (
        <>
            {
                featuredTours ?.map(tour=>(
                    <Col lg='3' className='mb-4' key={tour._id}>
                        <TourCard tour ={tour}></TourCard>
                    </Col>
                ))
            }
        </>
    );
};

export default FeaturedTourList;