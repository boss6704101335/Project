// src/products/dto/create-product.dto.ts 
import { IsString, IsNumber, Min, IsNotEmpty, IsOptional } from 'class-validator';
export class CreateProductDto {
    @IsString()                 // กฎข้อ 1: ต้องเป็นตัวอักษร 
    @IsNotEmpty()               // กฎข้อ 2: ห้ามเป็นค่าว่าง 
    name: string;

    @IsNumber()                 // กฎข้อ 3: ต้องเป็นตัวเลข 
    @Min(0)                     // กฎข้อ 4: ค่าน้อยสุดคือ 0 (ห้ามติดลบ) 
    price: number;

    @IsString()
    @IsOptional()               // กฎข้อ 5: มีก็ได้ ไม่มีก็ได้ (ถ้ามีต้องเป็น string) 
    description: string;
} 