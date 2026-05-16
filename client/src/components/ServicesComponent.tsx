import {  MdOutlineLocalShipping } from "react-icons/md"
import type { SingleServiceComponentProps } from "../types/appTypes"

// section on the home page to show all the services that we offer to the client comes here
export const ServicesComponent = () => {
    return (
        <div className="flex flex-row justify-around items-center py-10">
            <SingleServiceComponent icon={<MdOutlineLocalShipping className="text-2xl"></MdOutlineLocalShipping>} serviceHeadingName="Free Shipping" serviceDescriptionName="On orders over $100" ></SingleServiceComponent>
            <SingleServiceComponent icon={<MdOutlineLocalShipping className="text-2xl"></MdOutlineLocalShipping>} serviceHeadingName="Secure Payment" serviceDescriptionName="100% protected payments"></SingleServiceComponent>
            <SingleServiceComponent icon={<MdOutlineLocalShipping className="text-2xl"></MdOutlineLocalShipping>} serviceHeadingName="Easy Returns" serviceDescriptionName="30-day return policy"></SingleServiceComponent>
            <SingleServiceComponent icon={<MdOutlineLocalShipping className="text-2xl"></MdOutlineLocalShipping>} serviceHeadingName="24/7 Support" serviceDescriptionName="Dedicated customer service"></SingleServiceComponent>
        </div>
    )
}



/**
 * Single service component which will be used again and again
 * this is for code modularity perspective itself
 */
export const SingleServiceComponent = (props : SingleServiceComponentProps) => {
    return (
        <div className="flex flex-row justify-center items-center bg-white">
            {/* icon related to the service comes here  */}
            <div className="mr-2">
                {/* <img src={props.iconImage} alt={props.serviceDescriptionName} /> */}
                {props.icon}
            </div>

            <div className="flex flex-col justify-center items-left">
                <h1 className="text-LG  text-black bg-white">{props.serviceHeadingName}</h1>
                <p className="text-sm text-gray-800 bg-white">{props.serviceDescriptionName}</p>
            </div>
        </div>

    )
}

// say everything went fine