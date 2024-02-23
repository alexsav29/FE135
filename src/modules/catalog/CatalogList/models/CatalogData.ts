export type CatalogData = {
    limit: number;
    skip: number;
    total: number;
    products: Product [];
}

export type Product = {
    id: number;
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    price: number;
    rating: number;
    stock: number;
    images: string [];
    thumbnail: string;
    title: string;
}