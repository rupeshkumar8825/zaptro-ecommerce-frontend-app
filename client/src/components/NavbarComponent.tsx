import axios from "axios";
import { Divide, MapPin } from "lucide-react"
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom"
import type { INavbarComponentProps } from "../types/appTypes";
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";

export const NavbarComponent = (props : INavbarComponentProps) => {

    // use states of the navbar component comes here 
    const [showOptionToDetectLocation, setShowOptionToDetectLocation] = useState<boolean>(false);


    const addUnderLineStyling = (clickedMenuItem : string) => {
        const routeLocation = useLocation();
        // check this routelocation matches with whom 
        if((routeLocation.pathname == "/" && clickedMenuItem == "home")
            || (routeLocation.pathname == "/products" && clickedMenuItem == "products")
            || (routeLocation.pathname == "/about" && clickedMenuItem == "about")
            || (routeLocation.pathname == "/contact" && clickedMenuItem == "contact"))
        {
            return 'px-3 py-2 border-b-2  border-red-500 text-red-600'
        }else {
            return 'px-3 py-2 border-b-2 border-transparent text-gray-800'
        }
    }

    const closeOptionToDetectLocationHandler = () => {
        setShowOptionToDetectLocation(false)
    }

    const showOptionToDetectLocationHandler = () => {
        console.log("user wants to detect the location again");
        // lets set the flag of this to be true 
        setShowOptionToDetectLocation(!showOptionToDetectLocation);
    }

    // simple use effect hook for the navbar component for this purpose 
    useEffect(() => {
        console.log("Navbar component rendered for the first time");
        return () => {
            console.log("Nothing to clear anything when the useeffect finish executing")      
        };
    }, []);


    return (
        <div className=" border border-black bg-white py-5 shadow-2xl">
            <div className=" flex justify-around items-center ">
                {/* logo section of the navbar comes here */}
                <div className="flex flex-row gap-5 items-center  relative">
                    <Link to={"/"}><h1 className="font-bold text-2xl font-serif"><span className="text-red-600">Z</span>aptro</h1></Link>
                    
                    {/* location related code comes here */}
                    <div className="flex justify-between items-center">
                        <MapPin className="text-red-500"></MapPin>
                        <span className="font-semibold">{props.location ? <div>
                            <p>{props.location.county}</p>
                            <p>{props.location.city}, {props.location.suburb}</p>
                        </div> : "Add Address"}</span>
                        {/* now lets define the icon for the caret to be able to select the location for this purpose */}
                        <FaCaretDown className="cursor-pointer" onClick={showOptionToDetectLocationHandler}></FaCaretDown>
                    </div> 
                    {/* detect location drop down related ui code comes here */}
                    {
                        showOptionToDetectLocation ? 
                        <div className="absolute top-20 right-0 z-50 bg-white  flex flex-col justify-between items-center shadow-2xl h-max rounded-sm">
                            <div className="flex flex-row justify-between mb-5 w-62.5 ml-10">
                                <h1 className="text-xl mb-5 ml-5 mt-5">Change Location</h1>
                                <CgClose className="h-6 w-6 cursor-pointer" onClick={closeOptionToDetectLocationHandler}></CgClose>
                            </div>
                            <button className=" text-white bg-red-500 px-2 py-2 rounded-md mb-5"> Detect Location</button>
                        </div> : null
                    }
                </div>

                <div className=" flex flex-row gap-15 justify-around items-center">

                    {/* other navigation options like the home, about, contact and so on */}
                    <nav className="flex flex-col justify-around items-center ">
                        {/* lets add the list of the links here for navigating to other pages */}
                        <ul className="flex flex-row gap-7 font-bold justify-around items-center">
                            <NavLink to={"/"}><li className={addUnderLineStyling("home")}>Home</li></NavLink>
                            <NavLink to={"/products"}><li className={addUnderLineStyling("products")}>Products</li></NavLink>
                            <NavLink to={"/about"}><li className={addUnderLineStyling("about")}>About</li></NavLink>
                            <NavLink to={"/contact"}><li className={addUnderLineStyling("contact")}>Contact</li></NavLink>
                        </ul>
                    </nav>
                    
                    {/* the cart of the application comes here */}
                    <Link to={"/cart"} className="relative">
                        <IoCartOutline className=" h-7 w-7 ">
                        </IoCartOutline>
                        <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white">0</span>
                    </Link>
                    {/* the signin button of the app  comes here */}
                    <button className="px-3 py-2 bg-red-500 text-white rounded-lg ">SignIn</button>

                </div>
            </div>
        </div>
    ) 
}