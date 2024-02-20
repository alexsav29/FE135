import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductItem } from "../models/Catalog";

export const CatalogItem = () => {
    const params = useParams();
    console.log(params);

    const [product, setProduct] = useState<ProductItem>();
    
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${params.catalogId}`).
        then(response => response.json()).
        then(data => {
            setProduct(data);
            console.log(data);
        });
    }, []);

    // const {title, thumbnail, price} = product;

    return <div className="item__container">
                <div className="catalog__item">
                    <h2 className="item__title">{product?.title}</h2>
                    <img src={product?.thumbnail} alt="#" />
                    <p>{product?.price} EUR</p>
                </div>
           </div>
};