import { makeAutoObservable } from "mobx";
import { ProductInCart } from "../models/ProductInCart";
import { Product } from "../models/Product";

class CartStore {
    cartState: ProductInCart[] = [];

    get cartCounts() {
        return this.cartState.reduce((acc, productInCart) => {
            return acc + productInCart.count;
        }, 0);
    };

    constructor() {
        makeAutoObservable(this);
    };

    addToCart = (product: Product) => {
        const findProductIndex = this.cartState.findIndex(({id}) => id === product.id);
        
        if (findProductIndex === -1) {
            this.cartState.push({...product, count: 1}); 
        } else {
            this.cartState[findProductIndex].count += 1;
        };
    };

    deleteOneItemFromCart = (product: Product) => {
        const findProductIndex = this.cartState.findIndex(({id}) => id === product.id);
        
        if (this.cartState[findProductIndex].count > 0) {
            this.cartState[findProductIndex].count -= 1; 
        };
    };

    deleteProduct = (productId: number) => {
        this.cartState = this.cartState.filter(({id}) => id !== productId);
    };
};

const cartStore = new CartStore();

export default cartStore;