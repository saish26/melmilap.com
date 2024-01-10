import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('feature_images')
export class FeatureImage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  image_link: string;

  @ManyToOne(() => User, (user: User) => user.featured_images, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
