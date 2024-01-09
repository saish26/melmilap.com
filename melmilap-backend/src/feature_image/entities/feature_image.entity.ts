import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('featured_image')
export class FeatureImage {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column({ type: 'varchar' })
  // image_link: string;
  // @ManyToOne(() => User, (user: User) => user.featured_images)
  // @JoinColumn({
  //   name: 'user_id',
  // })
  // user: User;
}
