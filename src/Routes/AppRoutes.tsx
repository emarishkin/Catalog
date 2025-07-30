import type { FC } from "react";
import { useState, useRef, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { Header } from "../components/Header";
import { SideBar } from "../components/Sidebar/SideBar";
import { Footer } from "../components/Footer";
import { ProductsPages } from "../Pages/ProductsPages";
import { BasketProvider } from "../context/BasketContext";
import { BasketPage } from "../Pages/BasketPage";

export const AppRoutes: FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
     const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

    useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        
        if (target.closest('.mobile-menu')) return;
  
        if (target.closest('.sidebar')) return;

        if (window.innerWidth <= 768) {
            setSidebarOpen(false);
        }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
    }, []);

    return (
        <>
        <BasketProvider>
            <Header 
                isMenuOpen={isSidebarOpen} 
                setMenuOpen={setSidebarOpen} 
            />
            <div className="main-content">
                <div ref={sidebarRef}>
                    <SideBar closeSidebar={()=>setSidebarOpen(false)} onSelectCategory={setSelectedCategory} isMobileOpen={isSidebarOpen} />
                </div>
                <div className="content">
                    <Routes>
                        <Route index element={<HomePage />} />
                        <Route path="/card" element={<div>Cart Page</div>} />
                        <Route path="/basket" element={<BasketPage />} />
                        <Route path="/categories/:id" element={<ProductsPages selectedCategory={selectedCategory} />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </BasketProvider>
        </>
    )
}