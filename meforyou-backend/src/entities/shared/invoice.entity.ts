import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany, Index, Check, Generated, BeforeInsert } from 'typeorm';
import { User } from '../core/user.entity';

export enum ServiceType {
    EVENT = 'event',
    CAR_RENTAL = 'car_rental',
    PROPERTY_RENTAL = 'property_rental'
}

export enum InvoiceStatus {
    DRAFT = 'draft',
    SENT = 'sent',
    PARTIAL = 'partial',
    PAID = 'paid',
    OVERDUE = 'overdue',
    CANCELLED = 'cancelled'
}

@Entity('invoices')
@Check(`"service_type" IN ('event', 'car_rental', 'property_rental')`)
@Check(`"invoice_status" IN ('draft', 'sent', 'partial', 'paid', 'overdue', 'cancelled')`)
export class Invoice {
    @PrimaryGeneratedColumn()
    invoice_id: number;

    @Column({ type: 'varchar', length: 50, unique: true })
    @Index()
    invoice_number: string;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column()
    user_id: number;

    @Column({ type: 'varchar', length: 20 })
    service_type: ServiceType;

    @Column()
    service_id: number;

    @Column({ type: 'date' })
    invoice_date: Date;

    @Column({ type: 'date' })
    @Index()
    due_date: Date;

    @Column({ type: 'decimal', precision: 12, scale: 2 })
    subtotal: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
    tax_amount: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
    discount_amount: number;

    @Column({ type: 'decimal', precision: 12, scale: 2 })
    total_amount: number;

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0.00 })
    amount_paid: number;

    @Column({
        type: 'varchar',
        length: 20,
        default: InvoiceStatus.DRAFT
    })
    @Index()
    invoice_status: InvoiceStatus;

    @Column({ type: 'text', nullable: true })
    payment_terms: string;

    @Column({ type: 'text', nullable: true })
    notes: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    // Computed property (in database as generated column)
    @Column({
        type: 'decimal',
        precision: 12,
        scale: 2,
        generatedType: 'STORED',
        asExpression: 'total_amount - amount_paid'
    })
    balance_due: number;



    @BeforeInsert()
    generateInvoiceNumber() {
        if (!this.invoice_number) {
            const date = new Date();
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
            this.invoice_number = `INV-${year}${month}${day}-${random}`;
        }
    }

    isOverdue(): boolean {
        const today = new Date();
        return this.invoice_status !== InvoiceStatus.PAID && this.due_date < today;
    }

    updateStatus() {
        if (this.amount_paid >= this.total_amount) {
            this.invoice_status = InvoiceStatus.PAID;
        } else if (this.amount_paid > 0) {
            this.invoice_status = InvoiceStatus.PARTIAL;
        } else if (this.isOverdue()) {
            this.invoice_status = InvoiceStatus.OVERDUE;
        }
    }
}
