import { Injectable } from '@nestjs/common';
import { CreateFeatureImageDto } from './dto/create-feature_image.dto';
import { UpdateFeatureImageDto } from './dto/update-feature_image.dto';

@Injectable()
export class FeatureImageService {
  create(createFeatureImageDto: CreateFeatureImageDto) {
    return 'This action adds a new featureImage';
  }

  findAll() {
    return `This action returns all featureImage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} featureImage`;
  }

  update(id: number, updateFeatureImageDto: UpdateFeatureImageDto) {
    return `This action updates a #${id} featureImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} featureImage`;
  }
}
