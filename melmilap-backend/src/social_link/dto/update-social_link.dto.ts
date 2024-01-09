import { PartialType } from '@nestjs/mapped-types';
import { CreateSocialLinkDto } from './create-social_link.dto';

export class UpdateSocialLinkDto extends PartialType(CreateSocialLinkDto) {}
