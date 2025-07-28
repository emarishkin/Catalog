import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes/AppRoutes";
import { SideBar } from "./components/Sidebar/SideBar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import type { FC } from "react";


export const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <SideBar />
          <div className="content">
            <AppRoutes />
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}