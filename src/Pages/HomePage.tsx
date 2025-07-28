import type { FC } from "react";
import { Poster } from "../components/Poster";
import { ProductsHome } from "../components/ProductsHome";
import { CategoriesHome } from "../components/CategoriesHome";

export const HomePage:FC = () => {
    return (
        <>
            <div className="card">
                <Poster />
            </div>
            <div className="card">
                <ProductsHome />
            </div>
            <div className="card">
                <CategoriesHome /> 
            </div>

        </>
        
        
    )
}