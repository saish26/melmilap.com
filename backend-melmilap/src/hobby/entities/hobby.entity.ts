import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('hobbies')
export class Hobby {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @ManyToOne(() => User, (user: User) => user.hobbies, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  @JoinColumn({
    name: 'user_id',
  })
  user: User;
}
