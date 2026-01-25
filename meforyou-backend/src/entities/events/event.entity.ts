import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany, Index, Check, BeforeInsert } from 'typeorm';
import { User } from '../core/user.entity';
import { EventCategory } from './event-category.entity';
import { EventVendorAssignment } from './event-vendor-assignment.entity';

export enum EventType {
    CORPORATE = 'corporate',
    WEDDING = 'wedding',
    BIRTHDAY = 'birthday',
    CONFERENCE = 'conference',
    CONCERT = 'concert',
    OTHER = 'other'
}

export enum EventStatus {
    DRAFT = 'draft',
    QUOTED = 'quoted',
    CONFIRMED = 'confirmed',
    IN_PROGRESS = 'in_progress',
    COMPLETED = 'completed',
    CANCELLED = 'cancelled',
    POSTPONED = 'postponed'
}

@Entity('events')
@Check(`"event_type" IN ('corporate', 'wedding', 'birthday', 'conference', 'concert', 'other')`)
@Check(`"event_status" IN ('draft', 'quoted', 'confirmed', 'in_progress', 'completed', 'cancelled', 'postponed')`)
export class Event {
    @PrimaryGeneratedColumn()
    event_id: number;

    @Column({ type: 'varchar', length: 50, unique: true })
    @Index()
    event_code: string;

    @ManyToOne(() => User, user => user, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'client_id' })
    client: User;

    @Column()
    client_id: number;

    @ManyToOne(() => User, user => user, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'agent_id' })
    agent: User;

    @Column({ nullable: true })
    agent_id: number;

    @Column({ type: 'varchar', length: 200 })
    event_name: string;

    @Column({ type: 'varchar', length: 20 })
    event_type: EventType;

    @ManyToOne(() => EventCategory, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'category_id' })
    category: EventCategory;

    @Column({ nullable: true })
    category_id: number;

    @Column({ type: 'text', nullable: true })
    event_description: string;

    @Column({ default: 0 })
    expected_guests: number;

    @Column({ type: 'decimal', precision: 15, scale: 2 })
    budget_amount: number;

    @Column({ type: 'varchar', length: 3, default: 'USD' })
    currency: string;

    @Column({
        type: 'varchar',
        length: 20,
        default: EventStatus.DRAFT
    })
    @Index()
    event_status: EventStatus;

    // Event dates
    @Column({ type: 'date', nullable: true })
    planning_start_date: Date;

    @Column({ type: 'date' })
    @Index()
    event_date: Date;

    @Column({ type: 'time', nullable: true })
    event_start_time: string;

    @Column({ type: 'time', nullable: true })
    event_end_time: string;

    @Column({ type: 'date', nullable: true })
    setup_date: Date;

    @Column({ type: 'date', nullable: true })
    teardown_date: Date;

    // Location info
    @Column({ type: 'varchar', length: 200, nullable: true })
    venue_name: string;

    @Column({ type: 'text', nullable: true })
    venue_address: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    venue_contact_name: string;

    @Column({ type: 'varchar', length: 20, nullable: true })
    venue_contact_phone: string;

    // Internal tracking
    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'created_by' })
    created_by_user: User;

    @Column()
    created_by: number;

    @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'approved_by' })
    approved_by_user: User;

    @Column({ nullable: true })
    approved_by: number;

    @Column({ type: 'timestamp', nullable: true })
    approval_date: Date;

    @Column({ type: 'text', nullable: true })
    cancellation_reason: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    // Relations
    @OneToMany(() => EventVendorAssignment, assignment => assignment.event)
    vendor_assignments: EventVendorAssignment[];



    @BeforeInsert()
    generateEventCode() {
        if (!this.event_code) {
            const date = new Date();
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
            this.event_code = `EVT-${year}${month}${day}-${random}`;
        }
    }
}
