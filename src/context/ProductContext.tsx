import { createContext, useCallback, useContext, useEffect, useState, type FC, type ReactNode } from "react";
import type { IProduct } from "../types";
import { fetchApiProducts } from "../Api";

interface ProductsContextType {
    allProduct:IProduct[]
    filteredProducts:IProduct[]
    loading:boolean
    error:string | null
    filterProducts:(categoryID:number | null) => void
}

const ProductContext = createContext<ProductsContextType | undefined>(undefined)

export const ProductProvider:FC<{children:ReactNode}> = ({children}) => {

    const [allProduct,setAllProducts] = useState<IProduct[]>([])
    const [filteredProducts,setFilteredProducts] = useState<IProduct[]>([])
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState<string | null>(null)
    
    const loadProducts = async() => {
        try {
            setLoading(true)
            const products = await fetchApiProducts()
            setAllProducts(products)
            setFilteredProducts(products)
        } catch (err) {
            setError("Fail");
        } finally {
            setLoading(false)
        }
    }

    const filterProducts = useCallback((categoryId: number | null) => {
    if (!categoryId) {
      setFilteredProducts(allProduct);
      return;
    }
    setFilteredProducts(allProduct.filter(p => p.category.id === categoryId));
    }, [allProduct]);
    
    useEffect(()=>{
       loadProducts()
    },[])

    return (
        <ProductContext.Provider value={{allProduct,filteredProducts,loading,error,filterProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProducts = () => {
    const context = useContext(ProductContext)
    if(!context){
        throw new Error("useProducts must be used within a ProductsProvider");
    }
    return context
}

