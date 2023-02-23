import React, { Component } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Tour from '../pages/Tour';
import TourDetail from '../pages/TourDetail';
import SearchResultList from '../pages/SearchResultList';


class Routers extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Navigate to = '/home' />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/tours" element={<Tour />} />
                <Route path="/tours/:id" element={<TourDetail />} />
                <Route path="/tours/search" element={< SearchResultList />} />

            </Routes>
        );
    }
}

export default Routers;