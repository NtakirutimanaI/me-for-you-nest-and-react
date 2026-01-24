import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { User } from '../core/user.entity';

@Entity('car_locations')
export class CarLocation {
    @PrimaryGeneratedColumn()
    location_id: number;

    @Column({ type: 'varchar', length: 200 })
    location_name: string;

    @Column({ type: 'text' })
    address: string;

    @Column({ type: 'varchar', length: 100 })
    city: string;

    @Column({ type: 'varchar', length: 20, nullable: true })
    phone: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    email: string;

    @Column({ type: 'time', default: '08:00:00' })
    opening_time: string;

    @Column({ type: 'time', default: '18:00:00' })
    closing_time: string;

    @Column({ default: false })
    is_24_hours: boolean;

    @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'manager_id' })
    manager: User;

    @Column({ nullable: true })
    manager_id: number;

    @Column({ default: true })
    @Index()
    is_active: boolean;
}
