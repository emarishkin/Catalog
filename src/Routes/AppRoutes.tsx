import type { FC } from "react";
import { useState, useRef, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { Header } from "../components/Header";
import { SideBar } from "../components/Sidebar/SideBar";
import { Footer } from "../components/Footer";
import { ProductsPages } from "../Pages/ProductsPages";

export const AppRoutes: FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

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
            <Header 
                isMenuOpen={isSidebarOpen} 
                setMenuOpen={setSidebarOpen} 
            />
            <div className="main-content">
                <div ref={sidebarRef}>
                    <SideBar isMobileOpen={isSidebarOpen} />
                </div>
                <div className="content">
                    <Routes>
                        <Route index element={<HomePage />} />
                        <Route path="/card" element={<div>Cart Page</div>} />
                        <Route path="/categories/:id" element={<ProductsPages />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </>
    )
}