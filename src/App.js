import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Form from './Form';
import Input from './Input';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/input" element={<Input />} />
      </Routes>
    </Router>
  );
};

export default App;
