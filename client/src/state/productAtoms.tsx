// all atoms related to the products comes here 

import { atom } from "recoil";
import type { ProductDetail } from "../types/appTypes";

export const allProductListAtom = atom<ProductDetail[]>({
    key : "allProductListAtom", 
    default : []
});



export const selectedProductAtom = atom<ProductDetail | null>({
    key : "selectedProductAtom", 
    default : null
})