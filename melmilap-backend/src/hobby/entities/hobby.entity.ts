import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

Entity('hobby');
export class Hobby {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  title: string;

  // @ManyToOne(() => User, (user: User) => user.hobbies)
  // @JoinColumn({
  //   name: 'user_id',
  // })
  // user: User;
}
