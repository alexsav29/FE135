import { Product } from "../../../../common/models/Product"

export type CatalogData = {
    limit: number
    skip: number
    total: number
    products: Product[]
}
