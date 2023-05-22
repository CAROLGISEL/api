import { CategoryModel } from "./category.model";

export interface ProductModel{
    id:number;
    title:string;
    price:number;
    description:string;
    images:any;
    category:CategoryModel;
}

export interface CreateProductDto extends Omit<ProductModel, 'id' | 'category'>{
    categoryId:number;
}
export interface UpdateProductDto extends Partial<ProductModel>{
    categoryId?:number;
}
