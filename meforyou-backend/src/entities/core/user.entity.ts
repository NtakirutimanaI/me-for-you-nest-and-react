import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, Index, Check } from 'typeorm';
import { UserAddress } from './user-address.entity';
import { UserDocument } from './user-document.entity';
import { UserRole } from './user-role.entity';

export enum UserType {
    ADMIN = 'admin',
    MANAGER = 'manager',
    AGENT = 'agent',
    CLIENT = 'client'
}

export enum AccountStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    SUSPENDED = 'suspended',
    PENDING = 'pending'
}

@Entity('users')
@Check(`"user_type" IN ('admin', 'manager', 'agent', 'client')`)
@Check(`"account_status" IN ('active', 'inactive', 'suspended', 'pending')`)
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({ type: 'varchar', length: 50, unique: true })
    username: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    @Index()
    email: string;

    @Column({ type: 'varchar', length: 255 })
    password_hash: string;

    @Column({
        type: 'varchar',
        length: 20,
        default: UserType.CLIENT
    })
    @Index()
    user_type: UserType;

    @Column({ type: 'varchar', length: 100 })
    first_name: string;

    @Column({ type: 'varchar', length: 100 })
    last_name: string;

    @Column({ type: 'varchar', length: 20, nullable: true })
    phone: string;

    @Column({ type: 'varchar', length: 500, nullable: true })
    profile_image_url: string;

    @Column({ type: 'date', nullable: true })
    date_of_birth: Date;

    @CreateDateColumn()
    registration_date: Date;

    @Column({ type: 'timestamp', nullable: true })
    last_login: Date;

    @Column({
        type: 'varchar',
        length: 20,
        default: AccountStatus.ACTIVE
    })
    @Index()
    account_status: AccountStatus;

    @Column({ default: false })
    email_verified: boolean;

    @Column({ default: false })
    two_factor_enabled: boolean;

    @CreateDateColumn()
    @Index()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    // Relations
    @OneToMany(() => UserAddress, address => address.user)
    addresses: UserAddress[];

    @OneToMany(() => UserDocument, document => document.user)
    documents: UserDocument[];

    @OneToMany(() => UserRole, userRole => userRole.user)
    roles: UserRole[];

    // Helper methods
    get fullName(): string {
        return `${this.first_name} ${this.last_name}`;
    }

    isAdmin(): boolean {
        return this.user_type === UserType.ADMIN;
    }

    isManager(): boolean {
        return this.user_type === UserType.MANAGER;
    }

    isAgent(): boolean {
        return this.user_type === UserType.AGENT;
    }

    isClient(): boolean {
        return this.user_type === UserType.CLIENT;
    }
}
