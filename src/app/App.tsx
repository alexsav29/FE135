
import { Route, Routes } from 'react-router-dom'
import { Main } from '../modules/main'
import { Post } from '../modules/post'
import { Layout } from './Layout'
import { Catalog } from '../modules/catalog'
import './App.css'
import { Cart } from '../modules/cart'


export const App = () => {
  
    return (
     <>        
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Main />} />
                <Route path="/post/*" element={<Post />}/>
                <Route path="/catalog/*" element={<Catalog />}/>
                <Route path="/cart" element={<Cart />}/>
            </Route>
        </Routes>
     </>
    )
}