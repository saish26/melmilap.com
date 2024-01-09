import { Exclude } from 'class-transformer';
import { Address } from 'src/address/entities/address.entity';
import { FeatureImage } from 'src/feature_image/entities/feature_image.entity';
import { Hobby } from 'src/hobby/entities/hobby.entity';
import { SocialLink } from 'src/social_link/entities/social_link.entity';
import { UserDetail } from 'src/user_detail/entities/user_detail.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  first_name: string;

  @Column({ type: 'varchar', length: 30 })
  last_name: string;

  @Column({ type: 'varchar', length: 30 })
  email: string;

  @Column({ type: 'varchar', length: 30 })
  gender: string;

  @Column({ type: 'varchar', length: 30 })
  @Exclude()
  password: string;

  @Column({ type: 'varchar', length: 30 })
  horoscope: string;

  @Column({ type: 'varchar', length: 30 })
  date_of_birth: string;

  @Column({ type: 'varchar', length: 30 })
  relationship_status: string;

  @Column({ type: 'varchar', length: 30 })
  contact: string;

  @Column({ type: 'varchar', length: 30 })
  is_verified: string;

  //   @OneToOne(() => Address, (address) => address.user)
  //   @JoinColumn({
  //     name: 'address_id',
  //   })
  //   address: Address;

  //   @OneToOne(() => UserDetail, (user_details: UserDetail) => user_details.user)
  //   user_details: UserDetail;

  //   @OneToMany(() => Hobby, (hobbies: Hobby) => hobbies.user)
  //   hobbies: Hobby[];

  //   @OneToMany(() => SocialLink, (social_links: SocialLink) => social_links.user)
  //   social_links: SocialLink[];

  //   @OneToMany(
  //     () => FeatureImage,
  //     (featured_images: FeatureImage) => featured_images.user,
  //   )
  //   featured_images: FeatureImage[];

  //   @ManyToOne(() => User, (connections: User) => connections.connected)
  //   connections: User[];

  //   @ManyToOne(() => User, (connected: User) => connected.connections)
  //   connected: User[];
}
