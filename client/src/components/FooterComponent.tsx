// this is the footer component of the website which will come at the end of every page of the website

import { BsInstagram, BsTwitter } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
import { PiPinterestLogo } from "react-icons/pi"

export const FooterComponent = () => {
    return (
        <div className="  flex flex-row justify-around items-left py-10 bg-[#101829]">
            {/* zaptro part comes here */}
            <div className="  text-white text-sm">
                <h1 className="text-red-500 font-semibold">Zaptro</h1>
                <p>Powering Your World with the Best in Electronics</p>
                <p>123 Electronics SL. Style City. NY 10001</p>
                <p>Phone : (123) 456-7890</p> 
            </div>

            {/* customer service part comes here */}
            <div className=" text-white text-sm">
                <h1 className="text-md font-semibold">Customer Service</h1>
                <p>Contact Us</p>
                <p>Shipping & Returns</p>
                <p>FAQs</p>
                <p>Order Tracking</p>
                <p>Size Guide</p>
            </div>

            {/* Follow us section comes here for this purpose */}
            <div className=" text-white flex flex-col justify-start items-center text-sm">
                <h1 className="text-md font-semibold">Follow Us</h1>
                <div className="flex flex-row justify-between items-center">
                    <FaFacebook className="mr-4"></FaFacebook>
                    <BsInstagram className="mr-4"></BsInstagram>    
                    <BsTwitter className="mr-4"></BsTwitter>
                    <PiPinterestLogo className="mr-4"></PiPinterestLogo>
                </div>
            </div>

            {/* Last column of the footer comes here */}
            <div className=" flex flex-col justify-start items-left text-white text-sm">
                <h1 className="font-semibold">Stay in the Loop</h1>
                <p>Subscribe to get special offers, free giveaways, and more</p>
                <div className="flex flex-row justify-start items-left">
                    <input type="text" className="rounded-md  px-3 py-2 text-white border border-white" placeholder="Enter email here" ></input>
                    <button className="bg-red-500  text-white px-3 py-2 rounded-md font-semibold ml-2"> Subscribe</button>
                </div>
            </div>
        </div>


    )
}

// say everything went fine
