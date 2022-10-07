import './App.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React, { Suspense } from 'react'
import { Routes, Route } from "react-router-dom";
const NotFound = React.lazy(() => import('pages/NotFound'));
const Home = React.lazy(() => import('pages/home'));
const DetailsPage = React.lazy(() => import('pages/details'));

function App() {
  return (
    <>
      <Suspense fallback={<div className='loader-wapper'><div className="lds-facebook"><div></div><div></div><div></div></div></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<Home />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/details/:name" element={<DetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
