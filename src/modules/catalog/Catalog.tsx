import { Route, Routes } from "react-router-dom"
import { CatalogList } from "./CatalogList"
import { CatalogItem } from "./CatalogItem"

export const Catalog = () => {
    return (
        <Routes>
            <Route index element={<CatalogList />} />
            <Route path="/:catalogId" element={<CatalogItem />} />
        </Routes>
    )
};