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
  // states of the application comes here 
  const [location, setLocation] = useState<AddressInformation | null>(null);



  const getUserLocationOnSuccessCallback : PositionCallback = async (position) => {
    console.log("The value of the position object that we got is as folllows\n", position);
          console.log("The coordinates object is as follows \n", position.coords);
          // lets get the value of the latitude and longitude for this purpose 
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          console.log("the value of the latitude and longitude is as follows \n", latitude, longitude);
          
          const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
          
          try{
              // lets make an request to fetch the details about the address of the user 
              const apiResponse = await axios.get(url)
              const exactLocation = apiResponse.data.address;
              const addressData : AddressInformation = {
                county : exactLocation.county, 
                city : exactLocation.city, 
                suburb : exactLocation.suburb
              }
              console.log("The exact location that we fetched is as follows \n", exactLocation);
              // lets set this in the location use state variable for this purpose 
              setLocation(addressData);

          }catch (error : any){
              console.log("some exception occurred while fetching the user's exact location with message", error.message)
              // some error occurred then lets make it empty 
              setLocation(null);
          }
          // say everything went fine for this purpose
          return;
  }

  const getUserLocationOnFailureCallback : PositionErrorCallback = (error) => {
    console.log("Some error occurred while trying to fetch the details of the location");
    console.log("the error details are as  follows \n", error.code, error.message);
  }


  /**
   * Function finds the location of the user using the inbuild geolocation
   * feature of the javascript. Also this function makes an api call to fetch 
   * the values of the address given the latitudes and longitudes for this purpose
   * @returns nothing. Just updates some variables here for this purpose 
   */
  const getUserLocation = () => {
      // lets try to make an api call to get the navigation of the user for this purpose
      navigator.geolocation.getCurrentPosition(getUserLocationOnSuccessCallback, getUserLocationOnFailureCallback);
  }



  // lets use the useeffect hook to fetch the location of the user 
  // everytime the app component is rendered for the first time 
  useEffect(() => {
    console.log("The app component rendered for the first time")
    getUserLocation()
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
        <NavbarComponent location={location}></NavbarComponent>
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
