import { FooterComponent } from "../components/FooterComponent";
import { useRecoilValue } from "recoil";
import { getAllProductSelectors, getListOfAllUniqueCategoriesSelector } from "../state/productSelectors";
import type { ProductDetail } from "../types/appTypes";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import { FilterComponent } from "../components/FilterComponent";
import { ProductCardComponent } from "../components/ProductCardComponent";

export const ProductsPage = () => {
    // all the recoil related variable comes here 
    const allProductList = useRecoilValue(getAllProductSelectors);
    const allCategoryList = useRecoilValue(getListOfAllUniqueCategoriesSelector);
    console.log("the list of all the products that was fetched  in the products page is as follows", allProductList)
    // all the component states comes here 
    const [filterList, setFilterList] = useState<boolean[]>([]);

    // all the application hooks comes here 


    // all the UI related JSX codes comes here for this purpose
    return (
        <div>
            <div className="border-2 border-black grid grid-cols-4">
                
                <FilterComponent categoryList = {allCategoryList}></FilterComponent>
                {/* Product listing section comes here */}
                <div className="border-2 border-black col-span-3 flex flex-row flex-wrap justify-between items-center p-5">
                    {
                        allProductList.map((currProduct : ProductDetail, index : number) => (
                            <ProductCardComponent key={index} image={currProduct.image} title={currProduct.title} price={currProduct.price}></ProductCardComponent>
                        ))
                    }
                </div>
            </div>

            <FooterComponent></FooterComponent>
        </div>
    )
}