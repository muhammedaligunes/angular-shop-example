export class Product{
    id?: number;
    name: string;
    categoryId: number;
    price: number;
    description: string;
    imageUrl: string;
    ratings: number;

    constructor(name:string, categoryId:number, price:number, description:string, imageUrl:string, ratings:number){
        this.name = name;
        this.categoryId = categoryId;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
        this.ratings = ratings;
    }

}