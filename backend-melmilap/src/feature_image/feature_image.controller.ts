import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FeatureImageService } from './feature_image.service';
import { CreateFeatureImageDto } from './dto/create-feature_image.dto';
import { UpdateFeatureImageDto } from './dto/update-feature_image.dto';

@Controller('feature-image')
export class FeatureImageController {
  constructor(private readonly featureImageService: FeatureImageService) {}

  @Post()
  create(@Body() createFeatureImageDto: CreateFeatureImageDto) {
    return this.featureImageService.create(createFeatureImageDto);
  }

  @Get()
  findAll() {
    return this.featureImageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.featureImageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFeatureImageDto: UpdateFeatureImageDto) {
    return this.featureImageService.update(+id, updateFeatureImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.featureImageService.remove(+id);
  }
}
