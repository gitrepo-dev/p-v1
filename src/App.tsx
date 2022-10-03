import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React, { Suspense } from 'react'
import { Routes, Route } from "react-router-dom";
const NotFound = React.lazy(() => import('pages/NotFound'));
const Home = React.lazy(() => import('pages/home'));
const DetailsPage = React.lazy(() => import('pages/details'));
// import Home from 'pages/home'
// import DetailsPage from 'pages/details'


function App() {
  return (
    <>
      <Suspense fallback={<div className='loader-wapper'><div className="lds-facebook"><div></div><div></div><div></div></div></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
