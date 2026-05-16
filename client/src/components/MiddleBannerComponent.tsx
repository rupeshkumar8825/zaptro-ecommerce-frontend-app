// this is the middle banner of the home page for this purpose
import banner from "../assets/banner1.jpg"

export const MiddleBannerComponent = () => {
    return (
        <div className="border border-black py-10">
            {/* lets add the dark overlay for this purpose */}


            <div className="relative flex flex-col justify-center items-center px-40 py-40 bg-fixed bg-cover bg-center bg-black  text-white"  style={{backgroundImage : `url(${banner})`}}>
               <div className="absolute inset-0 bg-black/60"></div>
                <h1 className="text-5xl font-semibold z-10">Next-Gen Electronics at Your Fingertips</h1>
                <p className="text-xl z-10">Discover the latest tech  innovations with unbeatable prices and free shipping on all orders</p>
                <button className="bg-red-500 z-10 text-white  px-3 py-2 mt-4 rounded-lg">Shop Now</button>
            </div>
        </div>
    )
}