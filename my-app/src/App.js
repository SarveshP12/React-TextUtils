import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router, Routes, Route, Link
// } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState();

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  };

  const toggleMode = () => {
    if (mode === 'light') {
      document.body.style.backgroundColor = '#042743';
      setMode('dark');
      showAlert("Dark mode Enabled", "success");
      document.title = "TextUtils - DarkMode";
      setInterval(() => {
        document.title = 'TextUtils is amazing!!!';
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils!!';
      }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode Enabled", "danger");
      document.title = "TextUtils - LightMode";
    }
  };

  return (
    <>
    <Navbar mode={mode} title="Sarvesh" aboutText="About Us" toggleMode={toggleMode} />
    <Alert alert={alert} />
    <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
      {/* <Router>
        <Navbar mode={mode} title="Sarvesh" aboutText="About Us" toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode} />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router> */}
    </>
  );
}

export default App;
