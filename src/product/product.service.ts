import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.model';
export class productDto {
  _id: string;
  title: string;
  prise: number;
  beforePrise: number;
  stock: boolean;
  category: string;
  information: object;
}
const key = (arr: object[]) => {
  return arr.map((item: object, i: number) => {
    return { ...item, key: i };
  });
};
@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private product: Model<ProductDocument>,
  ) {}
  async create(body: productDto) {
    //создание товара
    const product = new this.product(body);
    await product.save();
    return product;
  }
  async get() {
    //получение всех товаров
    const products: object[] = await this.product.find();
    return products;
  }
  async getCategory(category: string) {
    //получение всех товаров
    const products: object[] = await this.product.find({ category: category });
    return products;
  }
  async update(body: productDto) {
    //редактирование товара

    const product = await this.product.findByIdAndUpdate(body._id, body);
    return product;
  }
  async destory(_id: string) {
    //удаление товара
    console.log(_id);
    let products = await this.product.findById(_id);
    let product = await this.product.findByIdAndDelete(_id);
    console.log(products);
    return product;
  }
}
