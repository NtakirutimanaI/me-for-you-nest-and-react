import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, Index, Check } from 'typeorm';
import { User } from './user.entity';

export enum DocumentType {
    DRIVERS_LICENSE = 'drivers_license',
    PASSPORT = 'passport',
    ID_CARD = 'id_card',
    INSURANCE = 'insurance',
    OTHER = 'other'
}

export enum VerificationStatus {
    PENDING = 'pending',
    VERIFIED = 'verified',
    REJECTED = 'rejected',
    EXPIRED = 'expired'
}

@Entity('user_documents')
@Check(`"document_type" IN ('drivers_license', 'passport', 'id_card', 'insurance', 'other')`)
@Check(`"verification_status" IN ('pending', 'verified', 'rejected', 'expired')`)
export class UserDocument {
    @PrimaryGeneratedColumn()
    document_id: number;

    @ManyToOne(() => User, user => user.documents, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column()
    user_id: number;

    @Column({
        type: 'varchar',
        length: 20
    })
    document_type: DocumentType;

    @Column({ type: 'varchar', length: 100, nullable: true })
    document_number: string;

    @Column({ type: 'varchar', length: 200, nullable: true })
    issuing_authority: string;

    @Column({ type: 'date', nullable: true })
    issue_date: Date;

    @Column({ type: 'date', nullable: true })
    expiry_date: Date;

    @Column({ type: 'varchar', length: 500, nullable: true })
    document_url: string;

    @Column({
        type: 'varchar',
        length: 20,
        default: VerificationStatus.PENDING
    })
    @Index()
    verification_status: VerificationStatus;

    @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'verified_by' })
    verified_by_user: User;

    @Column({ nullable: true })
    verified_by: number;

    @Column({ type: 'timestamp', nullable: true })
    verified_at: Date;

    @CreateDateColumn()
    created_at: Date;


}
