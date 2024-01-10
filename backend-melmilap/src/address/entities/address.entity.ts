import { User } from 'src/user/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('addresses')
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  province: string;

  @Column()
  district: string;

  @Column()
  city: string;

  @Column()
  contact: string;

  @Column()
  street: string;

  @Column()
  municipality: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @OneToOne(() => User, (user) => user.address, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  user: User;
}
