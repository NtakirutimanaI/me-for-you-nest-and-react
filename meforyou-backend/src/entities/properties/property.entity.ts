import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany, Index, Check, BeforeInsert } from 'typeorm';
import { User } from '../core/user.entity';
import { PropertyType } from './property-type.entity';
import { Lease } from './lease.entity';

export enum PropertyStatus {
    AVAILABLE = 'available',
    RENTED = 'rented',
    UNDER_MAINTENANCE = 'under_maintenance',
    UNLISTED = 'unlisted'
}

@Entity('properties')
@Check(`"property_status" IN ('available', 'rented', 'under_maintenance', 'unlisted')`)
export class Property {
    @PrimaryGeneratedColumn()
    property_id: number;

    @Column({ type: 'varchar', length: 50, unique: true })
    property_code: string;

    @Column({ type: 'varchar', length: 200 })
    property_name: string;

    @ManyToOne(() => PropertyType)
    @JoinColumn({ name: 'property_type_id' })
    property_type: PropertyType;

    @Column()
    property_type_id: number;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'owner_id' })
    owner: User;

    @Column()
    owner_id: number;

    @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'agent_id' })
    agent: User;

    @Column({ nullable: true })
    agent_id: number;

    // Address
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

    @Column({ type: 'decimal', precision: 10, scale: 8, nullable: true })
    latitude: number;

    @Column({ type: 'decimal', precision: 11, scale: 8, nullable: true })
    longitude: number;

    // Specifications
    @Column({ default: 1 })
    bedrooms: number;

    @Column({ type: 'decimal', precision: 3, scale: 1, default: 1.0 })
    bathrooms: number;

    @Column({ nullable: true })
    square_feet: number;

    @Column({ nullable: true })
    floor_number: number;

    @Column({ nullable: true })
    total_floors: number;

    @Column({ nullable: true })
    year_built: number;

    // Rental info
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    monthly_rent: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
    security_deposit: number;

    @Column({ default: 12 })
    minimum_lease_months: number;

    @Column({ type: 'date', default: () => 'CURRENT_DATE' })
    @Index()
    available_from: Date;

    // Status
    @Column({
        type: 'varchar',
        length: 20,
        default: PropertyStatus.AVAILABLE
    })
    @Index()
    property_status: PropertyStatus;

    @Column({ type: 'date', default: () => 'CURRENT_DATE' })
    listing_date: Date;

    // Features
    @Column({ type: 'jsonb', nullable: true })
    amenities: Record<string, any>;

    @Column({ default: false })
    furnished: boolean;

    @Column({ default: 0 })
    parking_spots: number;

    @Column({ default: false })
    pet_friendly: boolean;

    // Media
    @Column({ type: 'jsonb', nullable: true })
    photos_urls: string[];

    @Column({ type: 'varchar', length: 500, nullable: true })
    virtual_tour_url: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    // Relations
    @OneToMany(() => Lease, lease => lease.property)
    leases: Lease[];

    // Computed properties
    get full_address(): string {
        return `${this.street_address}, ${this.city}, ${this.state_province || ''} ${this.postal_code || ''}, ${this.country}`;
    }



    @BeforeInsert()
    generatePropertyCode() {
        if (!this.property_code) {
            const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
            this.property_code = `PROP${random}`;
        }
    }
}
