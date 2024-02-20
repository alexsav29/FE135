import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Main } from '../modules/main'
import { Post } from '../modules/post'
import { Catalog } from '../modules/catalog'
import { Layout } from './Layout'

export const App = () => {

    return (
            <>
                
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path='/post/*' element={<Post />} />
                        <Route path='/catalog/*' element={<Catalog />} />
                    </Route>
                </Routes>
                
            </>
    )
}