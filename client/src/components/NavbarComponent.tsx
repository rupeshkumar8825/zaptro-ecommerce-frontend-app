import { Divide, MapPin } from "lucide-react"
import { FaCaretDown } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom"

export const NavbarComponent = () => {

    const location = false;
    const routeLocation = useLocation();

    const isHome = routeLocation.pathname == "/";
    const isProducts = routeLocation.pathname == "/products";
    const isAbout = routeLocation.pathname == "/about";
    const isContact = routeLocation.pathname == "/contact";
    return (
        <div className="bg-white py-3 shadow-2xl border border-red-300">
            <div className="max-w-6xl mx-auto flex justify-around items-center border border-yellow-400">
                {/* logo section of the navbar comes here */}
                <div className="flex flex-row gap-2 items-center border border-green-300">
                    <Link to={"/"}><h1 className="font-bold text-2xl font-serif"><span className="text-red-600">Z</span>aptro</h1></Link>
                    
                    {/* location related code comes here */}
                    <div className=" border border-black-400 flex justify-between items-center">
                        <MapPin className="text-red-500"></MapPin>
                        <span className="font-semibold">{location ? <div>
                            Lalapur kudra kaimur
                        </div> : "Add Address"}</span>
                        {/* now lets define the icon for the caret to be able to select the location for this purpose */}
                        <FaCaretDown></FaCaretDown>
                    </div> 
                </div>

                {/* other navigation options like the home, about, contact and so on */}
                <nav className="flex flex-col justify-around items-center border border-orange-700">
                    {/* lets add the list of the links here for navigating to other pages */}
                    <ul className="flex flex-row gap-7 font-bold justify-around items-center border border-pink-400">
                        <NavLink to={"/"}><li className="border border-gray-500">Home</li></NavLink>
                        <NavLink to={"/products"}><li className="border border-gray-500">Products</li></NavLink>
                        <NavLink to={"/about"}><li className="border border-gray-500">About</li></NavLink>
                        <NavLink to={"/contact"}><li className="border border-gray-500">Contact</li></NavLink>
                    </ul>
                </nav>
            </div>
        </div>
    ) 
}