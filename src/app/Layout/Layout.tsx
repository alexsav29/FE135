import { NavLink, Outlet } from "react-router-dom"
import './Layout.css'
import { Container } from "./components/Container"
import cartStore from "../../common/store/CartStore"
import { observer } from "mobx-react-lite"
import { Badge } from "antd"

export const Layout = observer(() => {
    const {cartCounts} = cartStore;

    return (
        <>
            <header className='header'>
                <Container>
                    <nav className='nav'>
                        <ul className="nav__items">
                            <li className="nav__item"><NavLink to="/">Главная</NavLink></li>
                            <li className="nav__item"><NavLink to="/post">Блог</NavLink></li>
                            <li className="nav__item"><NavLink to="/catalog">Каталог</NavLink></li>
                            <li className="nav__item"><NavLink to="/task">Cписок задач</NavLink></li>
                            <li className="nav__item"><NavLink to="/cart"><Badge className="cart" showZero count={cartCounts}>Корзина</Badge></NavLink></li>
                        </ul>
                    </nav>
                </Container>
            </header>
            <main className="main">
                <Container>
                    <Outlet />
                </Container>                
            </main>
            <footer className="footer">
                <Container>2024</Container>
            </footer>
        </>
    )
})