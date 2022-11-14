import React from 'react';
import {Route, Routes as RouteSwitch} from 'react-router-dom';
import BookDetail from './pages/BookDetailPage';
import HomePage from './pages/Home';


const Routes = () => (
    <RouteSwitch>
        <Route path='/' element={<HomePage />} />
        <Route path='/book/:slug' element={<BookDetail />} />

    </RouteSwitch>
);

export default Routes;