import { BrowserRouter, Route, Routes} from "react-router-dom"
import { HomePage } from './pages/HomePage'
import { ProductsPage } from './pages/ProductsPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { AddToCartPage } from './pages/AddToCartPage'
import { NavbarComponent } from "./components/NavbarComponent"


function App() {

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
