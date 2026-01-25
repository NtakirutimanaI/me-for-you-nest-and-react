import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany, Index, Check, BeforeInsert } from 'typeorm';
import { CarCategory } from './car-category.entity';
import { CarRental } from './car-rental.entity';

export enum Transmission {
    AUTOMATIC = 'automatic',
    MANUAL = 'manual'
}

export enum FuelType {
    GASOLINE = 'gasoline',
    DIESEL = 'diesel',
    ELECTRIC = 'electric',
    HYBRID = 'hybrid'
}

export enum CarStatus {
    AVAILABLE = 'available',
    RENTED = 'rented',
    MAINTENANCE = 'maintenance',
    CLEANING = 'cleaning',
    UNAVAILABLE = 'unavailable'
}

@Entity('cars')
@Check(`"transmission" IN ('automatic', 'manual')`)
@Check(`"fuel_type" IN ('gasoline', 'diesel', 'electric', 'hybrid')`)
@Check(`"car_status" IN ('available', 'rented', 'maintenance', 'cleaning', 'unavailable')`)
export class Car {
    @PrimaryGeneratedColumn()
    car_id: number;

    @Column({ type: 'varchar', length: 50, unique: true })
    car_code: string;

    @Column({ type: 'varchar', length: 20, unique: true })
    license_plate: string;

    @Column({ type: 'varchar', length: 50 })
    make: string;

    @Column({ type: 'varchar', length: 50 })
    model: string;

    @Column()
    year: number;

    @ManyToOne(() => CarCategory, category => category.cars)
    @JoinColumn({ name: 'category_id' })
    category: CarCategory;

    @Column()
    category_id: number;

    @Column({ type: 'varchar', length: 30, nullable: true })
    color: string;

    @Column({
        type: 'varchar',
        length: 20,
        default: Transmission.AUTOMATIC
    })
    transmission: Transmission;

    @Column({
        type: 'varchar',
        length: 20,
        default: FuelType.GASOLINE
    })
    fuel_type: FuelType;

    @Column({ default: 5 })
    seats: number;

    @Column({ default: 4 })
    doors: number;

    @Column({ default: 0 })
    mileage: number;

    @Column({ type: 'decimal', precision: 8, scale: 2 })
    daily_rate: number;

    @Column({ type: 'varchar', length: 200, nullable: true })
    current_location: string;

    @Column({ type: 'varchar', length: 200, nullable: true })
    garage_location: string;

    @Column({
        type: 'varchar',
        length: 20,
        default: CarStatus.AVAILABLE
    })
    @Index()
    car_status: CarStatus;

    @Column({ type: 'jsonb', nullable: true })
    features: Record<string, any>;

    @Column({ type: 'text', nullable: true })
    insurance_info: string;

    @Column({ type: 'date', nullable: true })
    last_maintenance_date: Date;

    @Column({ type: 'date', nullable: true })
    next_maintenance_date: Date;

    @Column({ type: 'date', nullable: true })
    purchase_date: Date;

    @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
    purchase_price: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    // Relations
    @OneToMany(() => CarRental, rental => rental.car)
    rentals: CarRental[];

    // Computed properties
    get weekly_rate(): number {
        return this.daily_rate * 7;
    }

    get monthly_rate(): number {
        return this.daily_rate * 30;
    }

    get make_model(): string {
        return `${this.make} ${this.model}`;
    }



    @BeforeInsert()
    generateCarCode() {
        if (!this.car_code) {
            const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
            this.car_code = `CAR${random}`;
        }
    }
}
