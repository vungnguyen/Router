import './App.css';
import {Route, Routes} from "react-router";
import AppContext from "./context/AppContext";
import ListProduct from "./pages/product/list";
import React from "react";
import {Link} from "react-router-dom";
import Create from "./pages/product/list/create";
import Edit from "./pages/product/list/edit";
const globalState = [
    {
        name: 'IP12',
        price: 100
    },
    {
        name: 'IP13',
        price: 100
    }
]

function App() {
    return (
        <AppContext.Provider value={globalState}>
            <div>
                <nav>
                    <Link to ='/create'>Create</Link>
                </nav>
                <Routes>
                    <Route path = '/create' element={<Create/>}/>
                    <Route path = '/' element={<ListProduct/>} />
                    <Route path = '/edit/:id' element={<Edit/>} />
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
