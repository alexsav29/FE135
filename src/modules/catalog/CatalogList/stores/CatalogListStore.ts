import { makeAutoObservable, runInAction } from "mobx";
import { CatalogData } from "../models/CatalogData";

class CatalogListStore {

    catalogListDataState: CatalogData | undefined = undefined;

    awaiting: boolean = false;

    get productsData() {
      return this.catalogListDataState?.products;  
    };

    constructor() {
        makeAutoObservable(this);
    };

    loadingData = async () => {
        try {
            runInAction(() => {this.awaiting = true});
            const response = await fetch('https://dummyjson.com/products');
            if (response.status === 200) {
                const data: CatalogData = await response.json();
                runInAction(() => {this.catalogListDataState = data});
            };
        } catch (error) {
            console.log(error);
        } finally {
            runInAction(() => {this.awaiting = false});
        };
    };

};

export const store = new CatalogListStore();