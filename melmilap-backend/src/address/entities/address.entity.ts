import { User } from "src/user/entities/user.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

Entity('address')
export class Address {

    @PrimaryGeneratedColumn()
    id: number
    
    @Column({ type: 'varchar', length: 30 })
    province: string
    
    @Column({ type: 'varchar', length: 30 })
    district: string
    
    @Column({ type: 'varchar', length: 30 })
    city: string
    
    @Column({ type: 'varchar', length: 30 })
    street: string
    
    @Column({ type: 'varchar', length: 30 })
    municipality: string
    
    @Column({ type: 'varchar', length: 30 })
    latitude: string
    
    @Column({ type: 'varchar', length: 30 })
    longitude:string
  
    @OneToOne(() => User, (user: User) => user.address)
    public user: User
 }
