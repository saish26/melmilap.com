import { Address } from "src/address/entities/address.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

Entity('user_detail')
export class UserDetail {

    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    height: string
    
    @Column()
    weight: string
    
    @Column()
    religion: string
    
    @Column()
    cast: string
    
    @Column()
    education: string
    
    @Column()
    father_name: string

    @Column()
    income: string
    
    @Column()
    grandfather_name: string
    
    @OneToOne(() => User, (user: User) => user )
     user: User
 }
