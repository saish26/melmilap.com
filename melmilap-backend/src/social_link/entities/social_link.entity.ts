import { User } from "src/user/entities/user.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

Entity('social_links')
export class SocialLink {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({ type: 'varchar', length: 30 })
    title: string
    @ManyToOne(() => User, (user: User) => user.social_links)
    public user: User
}
