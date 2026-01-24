import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('payments')
export class Payment {
    @PrimaryGeneratedColumn()
    payment_id: number;

    @Column({ nullable: true })
    amount: number;

    @CreateDateColumn()
    created_at: Date;
}
