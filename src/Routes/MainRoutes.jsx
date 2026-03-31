import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Users from '../pages/Users'
import Notpage from '../pages/Notpage'

const MainRoutes = () => {
    return <Routes>
        
        {/* Home Page - jab user root URL pe jayega to yeh page dikhega */}
        <Route path='/' element={<Home />} />
        
        {/* About Page - /about URL pe yeh page khulega */}
        <Route path='/about' element={<About />} />
        
        {/* Contact Page - /contact URL pe contact page dikhega */}
        <Route path='/contact' element={<Contact />} />
        
        {/* Dynamic Route - yahan :id ki jagah koi bhi value aa sakti hai 
            Maslan: /users/5 , /users/101 , /users/abc etc.
            Is :id ko Users page mein use kar sakte hain */}
        <Route path='/users/:id' element={<Users />} />
        
        {/* 404 Page (Catch All Route) - agar koi bhi galat URL type kiya 
            to yeh Notpage dikhega. Yeh sabse last mein hona chahiye */}
        <Route path='*' element={<Notpage />} />

    </Routes>
}

export default MainRoutes