import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  //alet state
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      showAlert("Dark mode has been enabled", "success")  //note here we're calling a function which take 2 params and change state
      document.body.style.backgroundColor = 'teal'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")//note here we're calling a function which take 2 params and change state


    }
  }


  return (
    <div>
      <Navbar title="TikTik" homeText="Home" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <TextForm heading="Enter the text to analyze" mode={mode} />
      </div>
      {/* <About /> */}
    </div>

  )
}

export default App;
