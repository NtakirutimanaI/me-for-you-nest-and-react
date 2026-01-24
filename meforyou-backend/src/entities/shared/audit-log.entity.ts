import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('audit_logs')
export class AuditLog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    action: string;

    @CreateDateColumn()
    created_at: Date;
}
