import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { productDto, ProductService } from './product.service';

@Controller('api/product')
export class ProductController {
  constructor(private service: ProductService) {}
  @Get('/')
  get() {
    //получение всех товаров
    return this.service.get();
  }
  @Get('/:category')
  getCategory(@Param('category') category: string) {
    //получение по категорий товара
    return this.service.getCategory(category);
  }
  @Post('/')
  create(@Body() body: productDto) {
    //создание товара
    return this.service.create(body);
  }
  @Delete('/:_id')
  destory(@Param('_id') id: string) {
    //удаление товара
    return this.service.destory(id);
  }
  @Put('/')
  update(@Body() body: productDto) {
    return this.service.update(body);
  }
}
