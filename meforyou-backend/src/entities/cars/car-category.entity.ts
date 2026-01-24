import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, Index } from 'typeorm';
import { Car } from './car.entity';

@Entity('car_categories')
export class CarCategory {
    @PrimaryGeneratedColumn()
    category_id: number;

    @Column({ type: 'varchar', length: 100 })
    category_name: string;

    @Column({ type: 'decimal', precision: 8, scale: 2 })
    daily_rate_min: number;

    @Column({ type: 'decimal', precision: 8, scale: 2 })
    daily_rate_max: number;

    @Column({ type: 'decimal', precision: 8, scale: 2, default: 0.00 })
    deposit_amount: number;

    @Column({ type: 'jsonb', nullable: true })
    features: Record<string, any>;

    @Column({ default: true })
    @Index()
    is_active: boolean;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => Car, car => car.category)
    cars: Car[];
}
