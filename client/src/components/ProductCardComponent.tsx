import { IoCartOutline } from "react-icons/io5"
import type { ProductCardComponentProps } from "../types/appTypes"
import { useNavigate } from "react-router-dom"

// component to layout the products card part
export const ProductCardComponent = (props : ProductCardComponentProps) => {
    const navigate = useNavigate();
    const handleSingleProductClick = () => {
        // we need to navigate to the single product page details for this purpose
        navigate(`/products/${props.id}`)
    }
    return (
        <div className="flex flex-col justify-center items-left w-[20%] ml-10 mb-10 rounded-lg p-5 shadow-2xl cursor-pointer" onClick={handleSingleProductClick}>
            {/* image of the product comes here */}
            <div className="flex justify-center items-center">
                <img src={props.image} alt={props.title} className="h-20 w-20" />
            </div>
            {/* heading of this product comes here */}
            <div className="text-sm w-full">{props.title.length>25 ? `${props.title.slice(0, 25)} ...` : props.title}</div>

            {/* price of the product comes here */}
            <div>${props.price}</div>

            {/* add to cart option comes here */}
            <button className=" bg-red-500 px-1 py-2 text-white flex flex-row justify-center items-center rounded-sm">
                <IoCartOutline></IoCartOutline>
                <p className="text-sm ml-3">Add to Cart</p>
            </button>

        </div>
    )
}
// say everything went fine 