import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Main } from '../modules/main'
import { Post } from '../modules/post'
import { Catalog } from '../modules/catalog'
import { Layout } from './Layout'
import { Task } from '../modules/task'

export const App = () => {
    
    return (
            <>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path='/post' element={<Post />} />
                        <Route path='/catalog' element={<Catalog />} />
                        <Route path='/task' element={<Task />} />
                    </Route>
                </Routes>
            </>
    )
}

// Outlet будет вместо себя динамически подставлять модуль (когда срабатывает роутинг)