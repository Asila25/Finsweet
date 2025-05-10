import React from 'react'

import Layout from './layout'
import MainPage from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/About';
import PricingPage from './pages/Pricing';
import WorkPage from './pages/Work';
import BlogPage from './pages/Blog';
import ContactPage from './pages/Contact';


function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App
