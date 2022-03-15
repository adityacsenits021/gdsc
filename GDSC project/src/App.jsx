import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}  />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
