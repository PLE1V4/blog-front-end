import React from "react";
import { Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import { Articles } from "../components/pages/Articles";
import { Article } from "../components/pages/Article";
import { Home } from "../components/pages/Home";
import { Header } from "../components/layout/header";
import { Nav } from "../components/layout/nav";
import { Sidebar } from "../components/layout/Sidebar";
import { Footer } from "../components/layout/footer";
import { Create } from "../components/pages/Create";
import { Search } from "../components/pages/Search";
import { Edit } from "../components/pages/Edit";

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
                <Route path="/search/:query" element={<Search/>} />
                <Route path="/article/:id" element={<Article/>} />
                <Route path="/edit/:id" element={<Edit/>} />

                <Route path="*" element={
                    <div className="welcome">
                        <h1>Erorr 404</h1>
                    </div>
                }/>
                
            </Routes>
            
        </section>      

        <Sidebar/>
        <Footer/>
        
        </BrowserRouter>
    );
} 