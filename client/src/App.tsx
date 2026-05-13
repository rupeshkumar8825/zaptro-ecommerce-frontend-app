import { BrowserRouter, Route, Routes} from "react-router-dom"
import { HomePage } from './pages/HomePage'
import { ProductsPage } from './pages/ProductsPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { AddToCartPage } from './pages/AddToCartPage'
import { NavbarComponent } from "./components/NavbarComponent"
import axios from "axios"
import { useEffect, useState } from "react"
import type { AddressInformation } from "./types/appTypes"


function App() {
  

  // lets use the useeffect hook to fetch the location of the user 
  // everytime the app component is rendered for the first time 
  useEffect(() => {
    console.log("The app component rendered for the first time")
  }, [])



  return (
    <>

      {/* lets setup the routes of the application here.. 
        Going ahead we must also shift the routes to a separate file 
        and then use that file to then build the actual routes
        this way we just have to manage the routes file and the routing 
        of the application will be automatically handled. 
        */}
      <BrowserRouter>
        <NavbarComponent></NavbarComponent>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path='/products' element={<ProductsPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/cart' element={<AddToCartPage/>}/>
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
