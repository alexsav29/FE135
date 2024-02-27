import { observer } from "mobx-react-lite"
import cartStore from "../../common/store/CartStore"
import { CartProduct } from "./components/CartProduct";

export const Cart = observer(() => {
    const { cartState, deleteProduct, addToCart, deleteOneItemFromCart } = cartStore;

    return <div className="cart__wrapper">
                {cartState.length > 0 && cartState.map((cartProduct) => 
                    <CartProduct  
                        key={cartProduct.id} 
                        product={cartProduct} 
                        deleteProduct={deleteProduct}
                        addToCart={addToCart}
                        deleteOneItemFromCart={deleteOneItemFromCart}
                    />
                )}
           </div>
});