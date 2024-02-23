import { useEffect } from "react";
import { store } from "./stores/CatalogListStore" 
import { observer } from "mobx-react-lite";
import { Image, Spin } from 'antd';

export const CatalogList = observer(() => {
    const { loadingData, productsData, awaiting } = store;

    useEffect(() => {
        loadingData();
    }, []);

    console.log(awaiting);
    console.log(productsData);
    
    
    // if (awaiting) {
    //     return <h2>Loading...</h2>
    // };

    return <Spin spinning={awaiting}>
                <div className="products">
                    {productsData && productsData.length > 0 && productsData.map((product) => 
                        <div key={product.id} className="product">
                            <Image src={product.thumbnail} />
                            <div className="title">{product.title}</div>
                        </div>
                    )};
                </div>
    </Spin>
})