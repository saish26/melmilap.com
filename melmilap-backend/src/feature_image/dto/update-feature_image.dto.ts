import { PartialType } from '@nestjs/swagger';
import { CreateFeatureImageDto } from './create-feature_image.dto';

export class UpdateFeatureImageDto extends PartialType(CreateFeatureImageDto) {}
