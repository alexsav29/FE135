export type ProductList = {
    products: ProductItem [];
    limit: number;
    skip: number;
    total: number;
};

export type ProductItem = {
    brand: string;
    category: string;
    description: string;
    discountPercentage: string;
    id: number;
    images: string [];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
};