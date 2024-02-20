import { useContext, useEffect, useState } from "react";
import './CatalogList.css';
import { ProductItem } from "../models/Catalog";
import { LayoutContext } from "../../../app/context/LayoutContext";
// import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

export const CatalogList = () => {
    const [products, setProducts] = useState<ProductItem []>([]);

    const context = useContext(LayoutContext);
    // const categories = context?.categories;
    const setCategories = context!.setCategories;
    const currentCategory = context?.currentCategory;

    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://dummyjson.com/products').
        then(response => response.json()).
        then(data => {
            setProducts(data.products);
        });
    },[]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories').
        then(response => response.json()).
        then(categories => {
            setCategories(categories);
        });
    },[]);

    console.log(currentCategory);
    

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${currentCategory}`).
        then(response => response.json()).
        then(data => {
            console.log(data);
            console.log(currentCategory);
            
        });
    },[]);

    const handleItemClick = (id: number) => {
        navigate(`/catalog/${id}`)
    };

    return <div className="container">
        {products.map(({id, title, price, thumbnail}) => 
            <div key={uuidv4()} className="catalog__item" onClick={() => handleItemClick(id)}> {/* если в key подставлять id, вылетают ошибки */}
                <h2 className="item__title">{title}</h2>
                <img src={thumbnail} alt="#" />
                <p>{price} EUR</p>
            </div>
        )} 
        
    </div>
};