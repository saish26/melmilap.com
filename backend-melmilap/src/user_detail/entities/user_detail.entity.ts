import { User } from 'src/user/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_details')
export class UserDetail {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  height: string;

  @Column()
  weight: string;

  @Column()
  religion: string;

  @Column()
  cast: string;

  @Column()
  education: string;

  @Column()
  father_name: string;

  @Column()
  income: string;

  @Column()
  grandfather_name: string;

  @OneToOne(() => User, (user: User) => user, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  user: User;
}
