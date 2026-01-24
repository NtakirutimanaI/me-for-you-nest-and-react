import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, Index, Unique, Check } from 'typeorm';
import { User } from './user.entity';
import { UserType } from './user.entity';

export enum Department {
    EVENTS = 'events',
    CAR_RENTAL = 'car_rental',
    PROPERTY_RENTAL = 'property_rental',
    ALL = 'all'
}

@Entity('user_roles')
@Unique(['user_id', 'role_type', 'department'])
@Check(`"role_type" IN ('admin', 'manager', 'agent', 'client')`)
@Check(`"department" IN ('events', 'car_rental', 'property_rental', 'all')`)
export class UserRole {
    @PrimaryGeneratedColumn()
    user_role_id: number;

    @ManyToOne(() => User, user => user.roles, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column()
    user_id: number;

    @Column({ type: 'varchar', length: 20 })
    role_type: UserType;

    @Column({
        type: 'varchar',
        length: 20,
        default: Department.ALL
    })
    department: Department;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'assigned_by' })
    assigned_by_user: User;

    @Column()
    assigned_by: number;

    @CreateDateColumn()
    assigned_date: Date;

    @Column({ default: true })
    is_active: boolean;

    @Column({ type: 'text', nullable: true })
    notes: string;

    @Index()
    get userRoleIndex() {
        return `${this.user_id}_${this.is_active}`;
    }
}
