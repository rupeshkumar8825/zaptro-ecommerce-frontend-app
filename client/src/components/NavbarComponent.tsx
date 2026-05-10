import { Link } from "react-router-dom"

export const NavbarComponent = () => {
    return (
        <div className="bg-white py-3 shadow-2xl border border-red-300">
            <div className="max-w-6xl mx-auto flex justify-around items-center border border-yellow-400">
                {/* logo section of the navbar comes here */}
                <div className="flex items-center border border-green-300">
                    <Link to={"/"}><h1 className="font-bold text-2xl font-serif"><span className="text-red-600">Z</span>aptro</h1></Link>
                    
                    {/* location related code comes here */}
                    <div>

                    </div>
                </div>

                {/* other navigation options like the home, about, contact and so on */}
                <nav className="flex flex-col justify-around items-center border border-orange-700">
                    {/* lets add the list of the links here for navigating to other pages */}
                    <ul className="flex flex-row gap-7 font-bold justify-around items-center border border-pink-400">
                        <li className="border border-gray-500">Home</li>
                        <li className="border border-gray-500">Products</li>
                        <li className="border border-gray-500">About</li>
                        <li className="border border-gray-500">Contact</li>
                    </ul>
                </nav>
            </div>
        </div>
    ) 
}