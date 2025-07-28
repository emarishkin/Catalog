import type { FC } from "react";
import { Poster } from "../components/Poster";
import { ProductsHome } from "../components/ProductsHome";

export const HomePage:FC = () => {
    return (
        <>
            <div className="card">
                <Poster />
            </div>
            <div className="card">
                <ProductsHome />
            </div>

        </>
        
        
    )
}