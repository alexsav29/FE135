import { ProductInCart } from "../../../../common/models/ProductInCart"
import { Button, Image, Modal, notification } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import './CartProduct.css'
import { Product } from "../../../../common/models/Product";
import { observer } from "mobx-react-lite";

type CartProductProps = {
    product: ProductInCart;
    deleteProduct: (productId: number) => void;
    addToCart: (product: Product) => void;
    deleteOneItemFromCart: (product: Product) => void;
};

const { confirm } = Modal;


export const CartProduct = observer(({product, deleteProduct, addToCart, deleteOneItemFromCart}: CartProductProps) => {

    const handleDelete = (id: number) => {
        confirm({
            title: 'Вы действительно хотите удалить товар?',
            icon: <ExclamationCircleFilled />,
            content: 'Удаление....',
            okText: "Удалить",
            onOk() {
            //   console.log('OK');
              deleteProduct(id);
              notification.success({
                message: "Удаление прошло успешно",
                duration: 1
              });
            },
            onCancel() {
            //   console.log('Cancel');
            },
          });

        
    };

    const handleAddItem = (product: Product) => {
      addToCart(product);
    };

    const handleDeleteItem = (product: Product) => {
      deleteOneItemFromCart(product);
    };

    return  <div className="cart__item">
                <Image src={product.thumbnail} width={150} />
                <h3>{product.title}</h3>
                <p>Сумма: {product.price * product.count}$ за {product.count}/шт.</p>
                <div className="incr_dicr_btns">
                  <Button onClick={() => {handleDeleteItem(product)}}>-</Button>
                  <p>{product.count}</p>
                  <Button onClick={() => {handleAddItem(product)}}>+</Button>
                </div>
                <Button onClick={() => {handleDelete(product.id)}} type="primary" danger>Удалить</Button>
                <hr />
            </div>
})