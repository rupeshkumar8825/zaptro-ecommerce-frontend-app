// all atoms related to the products comes here 

import { atom } from "recoil";
import type { ProductDetail } from "../types/appTypes";

const demoProduct: ProductDetail = {
  id: "101",
  title: "Wireless Bluetooth Headphones",
  description:
    "Over-ear wireless headphones with active noise cancellation, 30-hour battery life, and fast charging support.",
  image: "https://example.com/images/headphones.jpg",
  category: "electronics",
  price: 2999,
  rating: 4.4,
};

export const allProductListAtom = atom<ProductDetail[]>({
    key : "allProductListAtom", 
    default : []
});



export const selectedProductAtom = atom<ProductDetail | null>({
    key : "selectedProductAtom", 
    default : null
})