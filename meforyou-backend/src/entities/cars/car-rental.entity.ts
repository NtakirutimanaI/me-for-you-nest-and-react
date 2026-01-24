import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Index, Check, BeforeInsert, BeforeUpdate } from 'typeorm';
import { User } from '../core/user.entity';
import { Car } from './car.entity';
import { CarLocation } from './car-location.entity';

export enum RentalStatus {
    RESERVED = 'reserved',
    ACTIVE = 'active',
    COMPLETED = 'completed',
    CANCELLED = 'cancelled',
    OVERDUE = 'overdue'
}

export enum PaymentStatus {
    PENDING = 'pending',
    PARTIAL = 'partial',
    PAID = 'paid',
    REFUNDED = 'refunded'
}

export enum InsuranceType {
    BASIC = 'basic',
    PREMIUM = 'premium',
    FULL = 'full'
}

@Entity('car_rentals')
@Check(`"rental_status" IN ('reserved', 'active', 'completed', 'cancelled', 'overdue')`)
@Check(`"payment_status" IN ('pending', 'partial', 'paid', 'refunded')`)
@Check(`"insurance_type" IN ('basic', 'premium', 'full')`)
export class CarRental {
    @PrimaryGeneratedColumn()
    rental_id: number;

    @Column({ type: 'varchar', length: 50, unique: true })
    @Index()
    rental_code: string;

    @ManyToOne(() => Car, car => car.rentals, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'car_id' })
    car: Car;

    @Column()
    car_id: number;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'client_id' })
    client: User;

    @Column()
    client_id: number;

    @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'agent_id' })
    agent: User;

    @Column({ nullable: true })
    agent_id: number;

    // Rental period
    @Column({ type: 'date' })
    @Index()
    pickup_date: Date;

    @Column({ type: 'time', nullable: true })
    pickup_time: string;

    @Column({ type: 'date' })
    return_date: Date;

    @Column({ type: 'time', nullable: true })
    return_time: string;

    @Column({ type: 'date', nullable: true })
    actual_return_date: Date;

    @Column({ type: 'time', nullable: true })
    actual_return_time: string;

    // Locations
    @ManyToOne(() => CarLocation)
    @JoinColumn({ name: 'pickup_location_id' })
    pickup_location: CarLocation;

    @Column()
    pickup_location_id: number;

    @ManyToOne(() => CarLocation)
    @JoinColumn({ name: 'return_location_id' })
    return_location: CarLocation;

    @Column()
    return_location_id: number;

    // Pricing
    @Column({ type: 'decimal', precision: 8, scale: 2 })
    daily_rate: number;

    @Column({ type: 'decimal', precision: 8, scale: 2, default: 0.00 })
    insurance_amount: number;

    @Column({ type: 'decimal', precision: 8, scale: 2, default: 0.00 })
    additional_fees: number;

    @Column({ type: 'decimal', precision: 8, scale: 2, default: 0.00 })
    discount_amount: number;

    // Status
    @Column({
        type: 'varchar',
        length: 20,
        default: RentalStatus.RESERVED
    })
    @Index()
    rental_status: RentalStatus;

    @Column({
        type: 'varchar',
        length: 20,
        default: PaymentStatus.PENDING
    })
    payment_status: PaymentStatus;

    // Driver info
    @Column({ type: 'varchar', length: 50, nullable: true })
    driver_license_number: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    driver_license_country: string;

    @Column({ nullable: true })
    driver_age: number;

    // Additional info
    @Column({
        type: 'varchar',
        length: 20,
        default: InsuranceType.BASIC
    })
    insurance_type: InsuranceType;

    @Column({ type: 'text', nullable: true })
    notes: string;

    @Column({ type: 'text', nullable: true })
    cancellation_reason: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    // Computed properties
    get rental_days(): number {
        const days = Math.ceil((this.return_date.getTime() - this.pickup_date.getTime()) / (1000 * 60 * 60 * 24));
        return days > 0 ? days : 1;
    }

    get base_amount(): number {
        return this.daily_rate * this.rental_days;
    }

    get total_amount(): number {
        return this.base_amount + this.insurance_amount + this.additional_fees - this.discount_amount;
    }

    get is_overdue(): boolean {
        if (!this.actual_return_date && this.return_date < new Date()) {
            return true;
        }
        return false;
    }

    @Index()
    get clientRentalsIndex() {
        return this.client_id;
    }

    @Index()
    get carRentalsIndex() {
        return `${this.car_id}_${this.pickup_date.toISOString().split('T')[0]}`;
    }

    @BeforeInsert()
    generateRentalCode() {
        if (!this.rental_code) {
            const date = new Date();
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
            this.rental_code = `RENT-${year}${month}${day}-${random}`;
        }
    }

    @BeforeUpdate()
    checkOverdue() {
        if (!this.actual_return_date && this.return_date < new Date() && this.rental_status !== RentalStatus.COMPLETED) {
            this.rental_status = RentalStatus.OVERDUE;
        }
    }
}
