import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './views/Home.jsx'
import { BrowserRouter, Routes,Route } from 'react-router'
import Add from './views/Add.jsx'
import Edit from './views/Edit.jsx'

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/edit/:userid" element={<Edit/>}/>
    </Routes>
    </BrowserRouter>

)
