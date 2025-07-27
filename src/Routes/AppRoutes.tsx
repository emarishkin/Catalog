import type { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";

export const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/card" element={<div>Cart Page</div>} />
        </Routes>
    )
}