import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, Index, Unique, Check } from 'typeorm';
import { Event } from './event.entity';
import { EventVendor } from './event-vendor.entity';

export enum AssignmentStatus {
    PENDING = 'pending',
    CONFIRMED = 'confirmed',
    COMPLETED = 'completed',
    CANCELLED = 'cancelled'
}

@Entity('event_vendor_assignments')
@Unique(['event_id', 'vendor_id', 'service_date'])
@Check(`"status" IN ('pending', 'confirmed', 'completed', 'cancelled')`)
export class EventVendorAssignment {
    @PrimaryGeneratedColumn()
    assignment_id: number;

    @ManyToOne(() => Event, event => event.vendor_assignments, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'event_id' })
    event: Event;

    @Column()
    event_id: number;

    @ManyToOne(() => EventVendor, vendor => vendor.assignments, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'vendor_id' })
    vendor: EventVendor;

    @Column()
    vendor_id: number;

    @Column({ type: 'text', nullable: true })
    service_description: string;

    @Column({ type: 'decimal', precision: 12, scale: 2 })
    agreed_price: number;

    @Column({ type: 'date', nullable: true })
    service_date: Date;

    @Column({ type: 'time', nullable: true })
    service_start_time: string;

    @Column({ type: 'time', nullable: true })
    service_end_time: string;

    @Column({
        type: 'varchar',
        length: 20,
        default: AssignmentStatus.PENDING
    })
    status: AssignmentStatus;

    @Column({ type: 'text', nullable: true })
    notes: string;

    @CreateDateColumn()
    created_at: Date;


}
