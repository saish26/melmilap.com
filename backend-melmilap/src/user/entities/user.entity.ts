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
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  gender: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  tags: string;

  @Column()
  status: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  interest: string;

  @Column()
  horoscope: string;

  @Column()
  date_of_birth: string;

  @Column()
  relationship_status: string;

  @Column()
  contact: string;

  @Column({ nullable: true })
  is_verified: string;

  @OneToOne(() => Address, (address) => address.user, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'address_id' })
  address: Address;

  @OneToOne(() => UserDetail, (user_details: UserDetail) => user_details.user, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'user_detail_id' })
  user_details: UserDetail;

  @OneToMany(() => Hobby, (hobbies: Hobby) => hobbies.user, {
    cascade: ['insert', 'update'],
  })
  hobbies: Hobby[];

  @OneToMany(
    () => SocialLink,
    (social_links: SocialLink) => social_links.user,
    { cascade: ['insert', 'update'] },
  )
  social_links: SocialLink[];

  @OneToMany(
    () => FeatureImage,
    (featured_images: FeatureImage) => featured_images.user,
    { cascade: ['insert', 'update'] },
  )
  feature_images: FeatureImage[];

  @ManyToMany(() => User, {
    cascade: ['insert', 'update'],
  })
  @JoinTable({ name: 'users_connections' })
  connections: User[];
}
