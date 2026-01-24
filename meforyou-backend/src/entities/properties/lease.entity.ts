import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany, Index, Check, BeforeInsert } from 'typeorm';
import { User } from '../core/user.entity';
import { Property } from './property.entity';

export enum LeaseStatus {
    DRAFT = 'draft',
    PENDING_APPROVAL = 'pending_approval',
    ACTIVE = 'active',
    TERMINATED = 'terminated',
    EXPIRED = 'expired'
}

export enum DepositStatus {
    PENDING = 'pending',
    HELD = 'held',
    PARTIALLY_REFUNDED = 'partially_refunded',
    FULLY_REFUNDED = 'fully_refunded'
}

@Entity('leases')
@Check(`"lease_status" IN ('draft', 'pending_approval', 'active', 'terminated', 'expired')`)
@Check(`"deposit_status" IN ('pending', 'held', 'partially_refunded', 'fully_refunded')`)
export class Lease {
    @PrimaryGeneratedColumn()
    lease_id: number;

    @Column({ type: 'varchar', length: 50, unique: true })
    @Index()
    lease_code: string;

    @ManyToOne(() => Property, property => property.leases, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'property_id' })
    property: Property;

    @Column()
    property_id: number;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'tenant_id' })
    tenant: User;

    @Column()
    tenant_id: number;

    @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'agent_id' })
    agent: User;

    @Column({ nullable: true })
    agent_id: number;

    // Lease terms
    @Column({ type: 'date' })
    start_date: Date;

    @Column({ type: 'date' })
    end_date: Date;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    monthly_rent: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    security_deposit: number;

    @Column({
        type: 'varchar',
        length: 30,
        default: DepositStatus.PENDING
    })
    deposit_status: DepositStatus;

    @Column({ default: 1 })
    rent_due_day: number;

    @Column({ type: 'decimal', precision: 5, scale: 2, default: 5.00 })
    late_fee_percentage: number;

    // Status
    @Column({
        type: 'varchar',
        length: 20,
        default: LeaseStatus.DRAFT
    })
    @Index()
    lease_status: LeaseStatus;

    @Column({ type: 'date', nullable: true })
    termination_date: Date;

    @Column({ type: 'text', nullable: true })
    termination_reason: string;

    // Documents
    @Column({ type: 'varchar', length: 500, nullable: true })
    lease_document_url: string;

    @Column({ type: 'date', nullable: true })
    signed_date: Date;

    @Column({ default: false })
    signed_by_tenant: boolean;

    @Column({ default: false })
    signed_by_owner: boolean;

    // Additional terms
    @Column({ type: 'text', nullable: true })
    special_terms: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    // Computed properties
    get lease_months(): number {
        const start = new Date(this.start_date);
        const end = new Date(this.end_date);
        const years = end.getFullYear() - start.getFullYear();
        const months = end.getMonth() - start.getMonth();
        return years * 12 + months;
    }

    get total_rent(): number {
        return this.monthly_rent * this.lease_months;
    }

    get is_active(): boolean {
        const today = new Date();
        return (
            this.lease_status === LeaseStatus.ACTIVE &&
            new Date(this.start_date) <= today &&
            new Date(this.end_date) >= today
        );
    }

    @Index()
    get leaseStatusIndex() {
        return this.lease_status;
    }

    @Index()
    get leaseDatesIndex() {
        return `${this.start_date.toISOString().split('T')[0]}_${this.end_date.toISOString().split('T')[0]}`;
    }

    @Index()
    get tenantLeasesIndex() {
        return this.tenant_id;
    }

    @Index()
    get propertyLeasesIndex() {
        return this.property_id;
    }

    @BeforeInsert()
    generateLeaseCode() {
        if (!this.lease_code) {
            const date = new Date();
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
            this.lease_code = `LEASE-${year}${month}${day}-${random}`;
        }
    }
}
