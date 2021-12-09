import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import FullCard from "./components/FullCard"
import CardList from "./components/CardList"
import CreateBook from "./components/CreateBookContainer"
import EditBook from "./components/EditBookContainer"

export const useRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<CardList/>} />
                <Route path='/card/*' element={<FullCard/>} />
                <Route path='/create' element={<CreateBook />} />
                <Route path='/edit/*' element={<EditBook />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
    )
}