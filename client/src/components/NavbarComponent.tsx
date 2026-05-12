import { Divide, MapPin } from "lucide-react"
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom"

export const NavbarComponent = () => {
    const location = false;

    const addUnderLineStyling = (clickedMenuItem : string) => {
        const routeLocation = useLocation();
        // check this routelocation matches with whom 
        if((routeLocation.pathname == "/" && clickedMenuItem == "home")
            || (routeLocation.pathname == "/products" && clickedMenuItem == "products")
            || (routeLocation.pathname == "/about" && clickedMenuItem == "about")
            || (routeLocation.pathname == "/contact" && clickedMenuItem == "contact"))
        {
            // then the user has selected the home path hence we need to
            // return the correct styling for this case 
            return 'px-3 py-2 border-b-2  border-red-500 text-red-600'
        }else {
            // this means that the mismatch happened hence we need to not return 
            // anything and do no need to show any of the underline below this 
            // menuitem for this purpose. 
            return 'px-3 py-2 border-b-2 border-transparent text-gray-800'
        }
    }

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
                <button className="px-3 py-2 border border-white bg-red-500 text-white rounded-lg ">SignIn</button>
            </div>
        </div>
    ) 
}