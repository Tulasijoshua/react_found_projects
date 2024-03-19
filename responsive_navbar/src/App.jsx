import { useState } from 'react'
import './App.css'
// import {
//   BrowserRouter as Router,
//   Route,
//   Redirect,
//   Switch
// } from 'react-router-dom';
// import About from './componentNav/About/About'
// import Home from './componentNav/Home/Home'
// import Contact from './componentNav/Contact/Contact'
// import Services from './componentNav/Services/Services'
// import Testimonial from './componentNav/Testimonial/Testimonial'
import Responsive from './components/Responsive'
import ReactNavbar from './components/ReactNavbar'
import Navbar2 from './components/Navbar2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      {/* <Responsive />
      <div className='bg-indigo-600 w-full h-screen'></div> */}
      {/* <ReactNavbar /> */}
      <Navbar2 />
    </div>
    // <Router>
    //   <main>
    //     <Route path="/" exact>
    //       <Home />
    //     </Route>
    //     <Route path='/about' exact>
    //       <About />
    //     </Route>
    //     <Route path='/' exact>
    //       <Contact />
    //     </Route>
    //     <Route path='/' exact>
    //       <Services />
    //     </Route>
    //     {/* <Redirect to="/" /> */}
    //   </main>
    // </Router>
    
  )
}

export default App
