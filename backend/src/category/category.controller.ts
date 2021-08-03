import { Controller, Get } from '@nestjs/common';
import { Category } from './category.entity';
import { CategoryService } from './category.service';


@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('/all')
  getCategories(): Promise<Category[]> {
    return this.categoryService.getCategories();
  }
}