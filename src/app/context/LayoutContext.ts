import { createContext } from "react";

type LayoutContextType = {
    categories: string[];
    setCategories: (category: string[]) => void;
    currentCategory: string;
}

export const LayoutContext = createContext<LayoutContextType | null>(null)