import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, Index, Check } from 'typeorm';
import { EventVendorAssignment } from './event-vendor-assignment.entity';

export enum VendorType {
    CATERING = 'catering',
    DECORATIONS = 'decorations',
    MUSIC = 'music',
    PHOTOGRAPHY = 'photography',
    VENUE = 'venue',
    TRANSPORTATION = 'transportation',
    OTHER = 'other'
}

@Entity('event_vendors')
@Check(`"vendor_type" IN ('catering', 'decorations', 'music', 'photography', 'venue', 'transportation', 'other')`)
export class EventVendor {
    @PrimaryGeneratedColumn()
    vendor_id: number;

    @Column({ type: 'varchar', length: 200 })
    vendor_name: string;

    @Column({ type: 'varchar', length: 20 })
    @Index()
    vendor_type: VendorType;

    @Column({ type: 'varchar', length: 100, nullable: true })
    contact_person: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    email: string;

    @Column({ type: 'varchar', length: 20, nullable: true })
    phone: string;

    @Column({ type: 'text', nullable: true })
    address: string;

    @Column({ type: 'text', nullable: true })
    service_description: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    hourly_rate: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    daily_rate: number;

    @Column({ default: true })
    @Index()
    is_active: boolean;

    @Column({ type: 'decimal', precision: 3, scale: 2, default: 0.00 })
    rating: number;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => EventVendorAssignment, assignment => assignment.vendor)
    assignments: EventVendorAssignment[];
}
