import { selector } from "recoil";
import type { ProductDetail } from "../types/appTypes";
import { allProductListAtom, selectedProductAtom } from "./productAtoms";

// all the corresponding selectors comes here which uses some specific or multiple atoms for this purpose 
export const getAllProductSelectors = selector({
    key : "getAllProductSelectors", 
    get : ({ get }) => {
        const allProductList : ProductDetail[] = get(allProductListAtom)
        return allProductList
    }
});



export const getSelectedProductDetails = selector<ProductDetail | null>({
    key : "getSelectedProductDetails", 
    get : ({ get }) => {
        return get(selectedProductAtom)
    }
});

