import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, Check } from 'typeorm';
import { User } from './user.entity';

export enum AddressType {
    HOME = 'home',
    WORK = 'work',
    BILLING = 'billing',
    SHIPPING = 'shipping'
}

@Entity('user_addresses')
@Check(`"address_type" IN ('home', 'work', 'billing', 'shipping')`)
export class UserAddress {
    @PrimaryGeneratedColumn()
    address_id: number;

    @ManyToOne(() => User, user => user.addresses, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column()
    user_id: number;

    @Column({
        type: 'varchar',
        length: 20,
        default: AddressType.HOME
    })
    address_type: AddressType;

    @Column({ type: 'text' })
    street_address: string;

    @Column({ type: 'varchar', length: 100 })
    city: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    state_province: string;

    @Column({ type: 'varchar', length: 20, nullable: true })
    postal_code: string;

    @Column({ type: 'varchar', length: 100, default: 'USA' })
    country: string;

    @Column({ default: false })
    is_default: boolean;

    @CreateDateColumn()
    created_at: Date;


}
