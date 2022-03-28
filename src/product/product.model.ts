import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ type: Object })
  image: any;
  @Prop()
  title: string; //название товара
  @Prop()
  prise: number; //цена товара
  @Prop()
  beforePrise: number; //прошлая цена
  @Prop({ default: false })
  stock: boolean; //есть в наличий
  @Prop({ default: 0 })
  reviews: number; //оценка
  @Prop()
  category: string; //категория товара
  @Prop({ type: Object })
  information: object;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
