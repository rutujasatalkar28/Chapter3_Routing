import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Error from './Error.jsx'
import Navbar from './Navbar.jsx'
import {Products,All,Men,Women} from './Products.jsx'
import SimpleSearch from './Demo.jsx'
import Students from './Students.jsx'
import Stud_Details from './Stud_Details.jsx'
import SearchParam from './SearchParam.jsx'
//import Data from './Data.jsx'
const LazyData = React.lazy(()=> import("./Data.jsx"));

createRoot(document.getElementById('root')).render(
<StrictMode>
<Router>
 {/* <App/> */}
  {/*<Navbar/> */}
   <SimpleSearch/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
         <Route path='/products' element={<Products/>}>
        <Route index element={<All/>}></Route>
        <Route path='/products/Men' element={<Men/>}></Route>
        <Route path='/products/Women' element={<Women/>}></Route>
        </Route>
        <Route path='/students' element={<Students />}></Route>
        <Route path='/Stud_Details/:id' element={<Stud_Details />}></Route>
        <Route path='*' element={<Error />}></Route>
        <Route path='/searchparam/' element={<SearchParam/>}></Route>
        {/* <Route path='/data' element={<Data />}></Route> */}
        <Route path='/data' element={
          <React.Suspense fallback="Loading...">
            <LazyData />
          </React.Suspense>
        }></Route>
        
        
   
      </Routes>
    </Router>
   
  </StrictMode>,
)
