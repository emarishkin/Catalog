import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes/AppRoutes";
import type { FC } from "react";
import { BasketProvider } from "./context/BasketContext";
import { ProductProvider } from "./context/ProductContext";

export const App: FC = () => {
  return (
    <BrowserRouter>
     <ProductProvider>
      <BasketProvider>
      <div className="app-container">
        <AppRoutes />
      </div>
      </BasketProvider>
     </ProductProvider>
    </BrowserRouter>
  )
}