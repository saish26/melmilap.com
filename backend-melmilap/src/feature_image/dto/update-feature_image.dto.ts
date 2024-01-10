import { PartialType } from '@nestjs/mapped-types';
import { CreateFeatureImageDto } from './create-feature_image.dto';

export class UpdateFeatureImageDto extends PartialType(CreateFeatureImageDto) {}
