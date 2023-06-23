import React from 'react';
import Head from './component/head'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Story from './component/ourstory';
import Solution from './component/solution';
import Contact from './component/contact';


const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Head/>} index />
      <Route path="/head" element={<Head/>} />
      <Route path="/ourstory" element={<Story/>} />
      <Route path="/solution" element={<Solution/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  </Router>
  );
};

export default App;
