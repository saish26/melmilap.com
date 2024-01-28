import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('social_links')
export class SocialLink {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  links: string;

  @ManyToOne(() => User, (user) => user.social_links, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  @JoinColumn({
    name: 'user_id',
  })
  user: User;
}
