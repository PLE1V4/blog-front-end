import React from "react";
import { Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import { Articles } from "../components/pages/Articles";
import { Home } from "../components/pages/Home";
import { Header } from "../components/layout/header";
import { Nav } from "../components/layout/nav";
import { Sidebar } from "../components/layout/Sidebar";
import { Footer } from "../components/layout/footer";
import { Create } from "../components/pages/Create";

export const BlogRoutes = () => {
    return (
        <BrowserRouter>

        <Header/>
        <Nav/>
        
        <section id="content" className="content">

            <Routes>
                    
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/articles" element={<Articles/>} />
                <Route path="/create" element={<Create/>} />
                
            </Routes>
            
        </section>      

        <Sidebar/>
        <Footer/>
        
        </BrowserRouter>
    );
} 