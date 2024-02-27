import { useEffect } from 'react'
import {store} from './stores/CatalogListStore'
import { observer } from 'mobx-react-lite'
import { Button, Image, Spin } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import cartStore from '../../../common/store/CartStore';
import './CatalogList.css'
import { Product } from '../../../common/models/Product';


export const CatalogList = observer(() => {
    const {loadingData, productsData, awaiting, loadCategories, allCategories } = store
    const { addToCart } = cartStore;

    useEffect(()=>{
        loadCategories()
    },[])

    useEffect(() => {
        if(allCategories){
            loadingData()
        }

    },[allCategories])

    const handleCategoryClick = (selectedCategory: string) => {
        loadingData(selectedCategory);
    }

    const handleProductCartClick = (product: Product) => {
        addToCart(product);
    };

    return <>
        {allCategories && allCategories.map((category) => 
                <Button 
                    key={category}
                    onClick={()=>{handleCategoryClick(category)}}
                >
                    {category}
                </Button>)
        }
        <Spin spinning={awaiting}>
                <div className='products'>
                    {productsData && productsData.length > 0 && productsData.map((product) => 
                        <div key={product.id} className='product'>
                            <Image className='product__image' src={product.thumbnail} />
                            <div className='product_short_info'>
                                <div className='product_title'><Link to={product.id.toString()}>{product.title}</Link></div>
                                <div className='product_price'>{product.price}$</div>
                                <Button onClick={() => {handleProductCartClick(product)}} className='product_add_btn' shape="circle" icon={<ShoppingCartOutlined />} />
                            </div>
                        </div>
                    )}
                </div>
        </Spin>
        </>
})