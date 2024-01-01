import { User } from "src/user/entities/user.entity";
import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class FeatureImage {

    @PrimaryGeneratedColumn()
    id: number
    
    @Column({type:'varchar'})
    image_link: string
    @ManyToOne(() => User, (user: User) => user.featured_images)
    public user: User
}
