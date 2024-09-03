import {Routes, Route } from "react-router-dom"
import Home from "./pages/home"

export default function AppRoutes(props) {
    return (
        <Routes>
            <Route path="/" element={<Home {...props}></Home>}/>
        </Routes>
    )
}