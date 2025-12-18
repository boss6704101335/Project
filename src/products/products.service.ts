import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import Product from './entities/product.entity';

@Injectable()
export class ProductsService {
  // Mock data 10 products with id, name, price, description
  private products: Product[] = [
    {
      id: 1, name: 'Product 1',
      price: 10.0, description:
        'Description for Product 1'
    },
    {
      id: 2, name: 'Product 2',
      price: 20.0, description:
        'Description for Product 2'
    },
    {
      id: 3, name: 'Product 3',
      price: 30.0, description:
        'Description for Product 3'
    },
    {
      id: 4, name: 'Product 4',
      price: 40.0, description:
        'Description for Product 4'
    },
    {
      id: 5, name: 'Product 5',
      price: 50.0, description:
        'Description for Product 5'
    },
    {
      id: 6, name: 'Product 6',
      price: 60.0, description:
        'Description for Product 6'
    },
    {
      id: 7, name: 'Product 7',
      price: 70.0, description:
        'Description for Product 7'
    },
    {
      id: 8, name: 'Product 8',
      price: 80.0, description:
        'Description for Product 8'
    },
    {
      id: 9, name: 'Product 9',
      price: 90.0, description:
        'Description for Product 9'
    },
    {
      id: 10, name: 'Product 10',
      price: 100.0, description:
        'Description for Product 10'
    },
  ];

  create(createProductDto: CreateProductDto) {
    const newId = this.products.length > 0 ? Math.max(...this.products.map(p => p.id)) + 1 : 1;
    const newProduct: Product = {
      id: newId,
      ...createProductDto, // นำข้อมูลจาก DTO (name, price, description) มาใส่เลย 
    };
    this.products.push(newProduct);
    return newProduct;
  }

  findAll() {
    //return `This action returns all products`;
    return this.findAllWithDiscount();
  }

  findOne(id: number) {
    return this.products.find(product => product.id === id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const productIndex = this.products.findIndex(product => product.id === id);
    if (productIndex !== -1) {
      const updatedProduct = {
        ...this.products[productIndex],
        ...updateProductDto,
      };
      this.products[productIndex] = updatedProduct;
      return updatedProduct;
    }
    return null;
  }

  remove(id: number) {
    const productIndex = this.products.findIndex(product => product.id === id);
    if (productIndex !== -1) {
      this.products.splice(productIndex, 1);
      return { deleted: true };
    }
    return { deleted: false };
  }

  findAllWithDiscount() {
    return this.products.map((item) => ({
      ...item,
      originalPrice: item.price,
      discountPrice: +(item.price * 0.7).toFixed(2), // ลด 30%
    }));
  }
}

